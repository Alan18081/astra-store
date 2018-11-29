export enum Messages {
  USER_ALREADY_EXISTS = 'User already exists',
  USER_NOT_FOUND = 'User doesn\'t exists',
  INVALID_TOKEN = 'Invalid access token',
  INVALID_PASSWORD = 'Invalid password',
  REFRESH_TOKEN_NOT_FOUND = 'Refresh token not found',
  FAILED_GOOGLE_AUTH = 'Failed to login by google',
  FILE_NOT_FOUND = 'File is not found',
  PRODUCT_NOT_FOUND = 'Product not found',
  INVALID_RIGHTS_TO_DELETE_COMMENT = 'Only owner of product can remove comments',
  EMAIL_VERIFICATION_HASH_NOT_FOUND = 'Email verification not found',
  CHAT_NOT_FOUND = 'Chat not found',
  AUTH_TOKEN_NOT_FOUND = 'Authorization token not found',

  MESSAGE_NOT_FOUND = 'Message not found',
  INVALID_RIGHTS_TO_UPDATE_MESSAGE = 'You don\'t have rights to update this message',
  INVALID_RIGHTS_TO_DELETE_MESSAGE = 'You don\'t have rights to delete this message',
}