import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  createdBy: {},
  completed: {
    type: Boolean,
    default: false,
  },
  todoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Todo',
    required: true,
  },
}, { timestamps: true });

export const SubTodo = mongoose.model('SubTodo', subTodoSchema);