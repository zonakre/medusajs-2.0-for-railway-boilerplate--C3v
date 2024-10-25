import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Welcome to Fanboxes.com
            <img class="mask-group-AWxaQv mask-group" data-id="1:8378" src="https://cdn.animaapp.com/projects/67169af668c23732491fc4c7/releases/671b5d9fe5da8649df83b383/img/mask-group-7.png" anima-src="https://cdn.animaapp.com/projects/67169af668c23732491fc4c7/releases/671b5d9fe5da8649df83b383/img/mask-group-7.png" alt="Mask group"/>
          </Heading>
        </span>
      </div>
    </div>
  )
}

export default Hero
