import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { userRouter } from './routes/user';
// import { lessonRouter } from './routes/lesson';
// import { gptRouter} from './routes/gpt';
// import { askRouter } from './routes/ask';

const app = new Hono();
app.use('/*' , cors())
app.route('/api/v1/user' , userRouter)

//add these routes later on
// app.route('/api/v1/lesson', lessonRouter)
// app.route('/api/v1/gpt', gptRouter)
// app.route('/api/v1/ask', askRouter)
export default app 