import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { NotifyAdmin, NotifyUser } from "~/components/email-templates";
import { Resend } from "resend";

export const mailRouter = createTRPCRouter({
  sendQuote: publicProcedure
    .input(z.object({
      firstName: z.string(),
      lastName: z.string(),
      email: z.string().email(),
      phoneNumber: z.string(),
      message: z.string(),
    }))
    .mutation(async ({ input }) => {
      const resend = new Resend(process.env.RESEND_API_KEY);
      try {
        const data = await resend.emails.send({
          from: "Sant Construction <calebcampbellcrm@gmail.com>",
          to: [input.email],
          subject: "Your Sant Construction Quote",
          react: NotifyUser({
            firstName: input.firstName,
            lastName: input.lastName,
            email: input.email,
            phone: input.phoneNumber,
            message: input.message,
          })
        })

        const adminData = await resend.emails.send({
          from: "Bid Bot <notify.web.bot@gmail.com>",
          to: ["calebcampbellcrm@gmail.com"],
          subject: "New Quote Request",
          react: NotifyAdmin({
            firstName: input.firstName,
            lastName: input.lastName,
            email: input.email,
            phone: input.phoneNumber,
            message: input.message,
          })
        })

        return { data, adminData };
      } catch (e) {
        console.error(e);
      }
    })
});
