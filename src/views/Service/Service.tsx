import {
  serviceBgOverlay,
  rectDarkBg,
  rectDarkSm,
  rectLightBg,
  rectLightSm,
  visaImmigration,
  corporate,
  outsourcing,
  busyBusinessPeopleWalking,
  servicesImage,
  servicesBg2,
  layerBg,
  layerBg2,
  layerBg3,
  servicesBg,
  nServiceBg
} from "@/assets/Service"

import Image from "next/image"
import { TitleText } from "@/components/TitleText"
import { Text } from "@/components/Text"
import { Button } from "@/components/Button"
import cx from "clsx"
import { ServiceImageContainer } from "@/components/ServiceImageContainer"
import { SectionContainer } from "@/components/SectionContainer"

const Service = () => {
  return (
    <section className="relative h-[1200px] max-2xl:h-[1000px] max-xl:h-[700px] flex items-center border-4 border-green-950" style={{
      backgroundImage: `url(${nServiceBg.src})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}>
      <SectionContainer>
        <section className='flex justify-center items-center gap-10'>
          {/* LEFT TEXTS */}
          <article className='flex-1'>
            <TitleText
              direction='left'
              size='head'>
              Service Highlights
            </TitleText>
            <Text
              size='description'
              className='font-thin flex-col flex gap-3 mb-7'>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nesciunt. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                quia non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </span>

              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nesciunt.
              </span>


            </Text>
            <Button
              content='Read More'
              reverse

            />
          </article>
          {/* RIGHT PICTURES */}
          <article className='flex-1 flex items-center justify-center'>
            <div className="max-w-md">
              <Image src={servicesImage} alt="services images" height={100} width={500} />
            </div>
          </article>
        </section>
      </SectionContainer>
    </section>

  )
}

export default Service
