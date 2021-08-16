const InvariantError = require('../../exceptions/InvariantError');
const { NotePayloadSchema } = require('./schema');

const NotesValidator = {
  validateNotePayload: (payload) => {
    const validationresult = NotePayloadSchema.validate(payload);

    if (validationresult.error) {
      throw new InvariantError(validationresult.error.message);
    }
  },
};

module.exports = NotesValidator;
