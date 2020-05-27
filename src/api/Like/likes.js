import { prisma } from "../../../generated/prisma-client";

export default {
	Like: {
		user: ({ id }) => prisma.like({ id }).user(),
		post: ({ id }) => prisma.like({ id }).post(),
		createdAt: ({ id }) => prisma.like({ id }).createdAt(),
		updatedAt: ({ id }) => prisma.like({ id }).updatedAt(),
	},
};
