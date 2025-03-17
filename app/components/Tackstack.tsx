import { map } from 'motion/react-client'
import Badge from '../json/Badge.json'
export default function Tackstack(){
    return(
        <>
        <main className="w-full h-auto border-t py-4 ">
          <h1 className="text-4xl text-balance tektur-GG">Tack stack</h1>
          <div className="flex flex-wrap py-9 gap-3">
            {Badge.badges.map((bg)=>(
              <div  key={bg.id}>
          <div className='text-xl px-4 py-2 text-white bg-neutral-600 rounded-2xl'>{bg.badge}</div>
              </div>
            ))}
          </div>
        </main>
        </>
    )
}