import { User } from 'discord.js';

export function leaderboardMember(user: User, xpInfo: any) {
  return {
    id: user.id,
    username: user.username,
    tag: '#' + user.discriminator,
    displayAvatarURL: user.displayAvatarURL(),
    ...xpInfo
  };
}

export function sendError(res: any, error: APIError) {
  return res.status(error.status).json({ message: error?.message })
}

export class APIError extends Error {
  private static readonly messages = new Map<number, string>([
    [400, 'Bad request'],
    [401, 'Unauthorized'],
    [403, 'Forbidden'],
    [404, 'Not found'],
    [418, 'I\'m a teapot'],
    [429, 'You are being rate limited'],
    [500, 'Internal server error'],
  ])

  constructor(public readonly status = 400) {
    super(APIError.messages.get(status));
  }
}

export interface DefaultAPIResponse {
  message: string;
  code?: number;
}