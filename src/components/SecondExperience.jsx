import React from 'react';
import Container from './helpers/Container';
import { secondTestifiersList } from './helpers/secondTestifiersList'
import Button from './helpers/Button'

const SecondExperience = () => {
  const testifiers = secondTestifiersList;

  return (
    <section className='flex flex-col items-center '>
      <Container>
        <div class="grid sm:grid-cols-3  w-full mt-[4rem]">

          {testifiers.map((testifier) => (
            <div className='flex flex-col items-center my-[2rem] '>
              <div>
                <img className='w-[200px]' src={testifier.image} alt={testifier.name} />
              </div>
              <div className='mt-[2rem] px-12'>
                <p className='font-inter font-600 text-[24px]'>
                  {testifier.name}
                </p>
                <div className=' mb-4 '>
                 
                  <Button text={testifier.identity} />
                </div>
                <div>
                  <p className='text-[16px] '>{testifier.testimony} </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </Container>
    </section>
  )
}

export default SecondExperience


