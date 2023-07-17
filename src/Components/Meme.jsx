import React, { useState } from 'react'
import { memeTypes } from '../meme-types'

function Meme() {
    const [name, setName] = useState("")
    const [topTxt, setTopTxt] = useState("")
    const [bottomTxt, setBottomTxt] = useState("")
    const [isGenerated, setIsGenerated] = useState(false)
    function handleClick() {
        setIsGenerated(prev => !prev)
    }
    return (
        <div>
            <div>
                <h1>Generate your meme</h1>
            </div>
            <div className='flex justify-between  mt-[20px] gap-[150px]' >
                <div className='flex flex-col gap-3  bg-gray-500 p-10'>
                    <select name="memeSelect" id="memeSelect" value={name} onChange={(e) => setName(e.target.value)} className=' p-2 rounded-[7px]'>
                        {
                            memeTypes.map((el) => {
                                return (
                                    <option key={el.label} value={el.value}>{el.value}</option>
                                )
                            })
                        }
                    </select>
                    <label htmlFor="top-text">Top text</label>
                    <input type="text" name="top-text" id="top-text" value={topTxt} onChange={(e) => setTopTxt(e.target.value)} placeholder='Enter top text' className=' rounded-[3px]  p-1' />

                    <label htmlFor="bottomText">Bottom text</label>
                    <input type="text" name='bottomText' id='bottomText' value={bottomTxt} onChange={(e) => setBottomTxt(e.target.value)} placeholder='Enter bottom text' className=' rounded-[3px]  p-1' />

                    <button type='submit' className='shadow-[0_0px_10px_rgba(0,255,0,0.5)]' onClick={handleClick} >Generate</button>
                </div>
                <div>
                    <div>
                        {
                            isGenerated ? (
                                <>
                                    <img src={`https://apimeme.com/meme?meme=${name}&top=${topTxt}&bottom=${bottomTxt}`} alt="image not found" />
                                </>
                            ) : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Meme