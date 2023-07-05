 
import dbConnect from '../../../db/db';
import Task, { ITask } from '../../../db/Tarefas';

dbConnect();

export default async function handler(req:any, res:any) {
  const { method } = req;
  
  console.log('dentro de handler method',method,req.body)

    switch (method) {
    case 'PUT':
      try {
        const task: ITask | any = await Task.findByIdAndUpdate(req.query.id, req.body, {
          new: true,
          runValidators: true,
        });
        res.status(200).json({ success: true, data: task });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE':
      try {
        console.log('dentro de handler DELETE',req.query.id);
        await Task.findByIdAndDelete(req.query.id);
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
