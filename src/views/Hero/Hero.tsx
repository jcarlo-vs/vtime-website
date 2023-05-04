import { Text } from "@/components/Text"
import heroBg from "../../assets/Hero/modern-business-buildings-financial-district.png"
import { Button } from "@/components/Button"
import { nHeroBg } from "@/assets/Hero"

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${nHeroBg.src})`,
      }}
      className='relative bg-no-repeat  bg-center bg-cover h-[105vh] -mt-12 z-0'>
      <div className='max-w-3xl p-8 rounded-lg bg-slate-800/30 absolute top-[7%] left-[18%]'>
        <Text
          size='hero'
          className='text-white mt-5 !font-thin'>
          Why Choose
        </Text>
        <Text
          size='hero'
          className='text-white font-bold mt-5 !text-8xl'>
          Business Asia
        </Text>
        <Text
          size='hero'
          className='text-white font-bold !text-8xl'>
          Consulting
        </Text>
        <Text
          size='subtitle'
          className='text-white mt-5 font-thin leading-6'>
          At BAC, We understand the importance of making well-informed decisions
          in business, That’s why we advocate for the “Stop, Look, and Listen”
          approach to decision-making. By talking a moment to pause, observe,
          and listen to all the relevant factors, our clients can make more
          informed and successful business decisions. Our team of experts is
          dedicated to helping businesses implement this approach and achieve
          their goals with confidence.
        </Text>
        <Button
          content='Read More'
          className='mt-10'
        />
      </div>
    </section>
  )
}

export default Hero
