export enum Messages {
  SERVER_ERROR = 'Server Error',
  USER_ALREADY_EXISTS = 'User already exists',
  USER_NOT_FOUND = 'User doesn\'t exists',
  USER_DOESNT_HAVE_PASSWORD = 'User doesn\'t have password. He signed up via google',
  INVALID_TOKEN = 'Invalid access token',
  INVALID_PASSWORD = 'Invalid password',
  REFRESH_TOKEN_NOT_FOUND = 'Refresh token not found',
  FILE_NOT_FOUND = 'File is not found',
  INVALID_RIGHTS_TO_DELETE_COMMENT = 'Only owner of product can remove comments',
  EMAIL_VERIFICATION_HASH_NOT_FOUND = 'Email verification hash not found',
  RESET_PASSWORD_HASH_NOT_FOUND = 'Reset password hash found',
  CHAT_NOT_FOUND = 'Chat not found',
  AUTH_TOKEN_NOT_FOUND = 'Authorization token not found',

  FRIENDSHIP_REQUESTS_SENDER_IS_NOT_FOUND = 'Sender of friendship request is not found',

  MESSAGE_NOT_FOUND = 'Message not found',
  MESSAGE_NOT_FOUND_OR_WRONG_PERMISSIONS = 'Message not found or you do not have permissions to fetch it',
  INVALID_RIGHTS_TO_UPDATE_MESSAGE = 'You don\'t have rights to update this message',
  INVALID_RIGHTS_TO_DELETE_MESSAGE = 'You don\'t have rights to delete this message',

  ALREADY_FRIEND = 'That person is already your friend',
  FRIENDSHIP_REQUEST_NOT_FOUND = 'Friendship request doesn\'t exists',
  FRIENDSHIP_REQUEST_ALREADY_EXISTS = 'Friendship request already exists',
  PROVIDED_USER_IS_NOT_RECEIVER = 'Provided user is not an receiver of friendship request',
  PROVIDED_USER_IS_NOT_SENDER = 'Provided user is not an sender of friendship request',

  SOCKET_NOT_FOUND = 'Socket is not connected',

  NOTES_NOTE_IS_NOT_FOUND = 'Note is not found',
  NOTES_NOTE_WITH_PROVIDED_COMMENT_IS_NOT_FOUND = 'Note with provided comment is not found',

  PHONE_HAVE_ALREADY_BEEN_VERIFIED = 'You have already verified phone number',
  REQUIRES_TO_SEND_VERIFICATION_CODE_FIRST = 'You have to send your phone number to receive verification code',
  INVALID_PHONE_VERIFICATION_CODE = 'Invalid phone verification code',
}

