import React from 'react'
import useStore from '../../store/use-store';
import CardRepo from '../Card/CardRepo';
export default function Profile() {

    const data = useStore((set) => set.data)
    const repo = useStore((set) => set.repo)

    console.log(repo);
    return (
        <div className='bg-gray-800'>
            <header className='w-full flex flex-col justify-center items-center'>
                <div className='flex w-2/3 justify-center items-center absolute mt-4 flex-col'>

                    <img className='w-2/5  bg-gray-800 p-1 rounded-sm' src={data.avatar_url} alt={data.login} />

                </div>

            </header>
            <section className='mt-20 flex w-full flex-col gap-8 items-center justify-center  '>
                <div className='text-center'>

                    <span className='text-white text-base font-medium '>{data.login} </span>
                    <p className='text-gray-400 text-base font-medium p-3 text-center'>{data.bio}</p>
                </div>
                <div className='bg-black  w-3/4 p-3 flex justify-center gap-5 rounded-lg' >

                    <span className='text-gray-500  font-semibold pr-4 border-r border-r-gray-500'>Followers</span>
                    <h2 className='text-white  font-semibold  ' >{data.followers}</h2>
                </div>
                <div className='bg-black  w-3/4 p-3 flex justify-center gap-5 rounded-lg' >

                    <span className='text-gray-500  font-semibold pr-4 border-r border-r-gray-500'>Following</span>
                    <h2 className='text-white  font-semibold  ' >{data.following}</h2>
                </div>
                <div className='bg-black  w-3/4 p-3 flex justify-center gap-5 rounded-lg' >

                    <span className='text-gray-500  font-semibold pr-4 border-r border-r-gray-500'>Location</span>
                    <h2 className='text-white  font-semibold  ' >{data.location}</h2>
                </div>

            </section>
            <section className='mt-6 flex flex-col justify-center items-center' >
                <h2 className='text-white  font-semibold mb-4 '>
                    Repositories
                </h2>
                <div className='p-3'>
                    {repo && repo.slice(0, 4).map((r) => {
                        return (
                            <CardRepo></CardRepo>
                        )
                    })}
                </div>

            </section>
        </div>
    )
}
