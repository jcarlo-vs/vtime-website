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
