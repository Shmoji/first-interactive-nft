import "./App.css";
import classNames from "classnames"
import { useState } from "react"

const textList = [
  { text: "at first there is nothing" },
  { text: "then, for unknown reasons, the universe begins from a single point" },
  { text: "all matter starts expanding outward with space" },
  { text: "the Milky Way galaxy starts forming 800 million years in" },
  { text: "humanity emerges in this galaxy on a lonely planet called Earth" },
  { text: "people here notice telepathy between others, but most brush it off as coincidence" },
  { text: "eventually, as science progresses, society learns about entanglement of particles and weird quantum behaviors" },
  { text: "particles become entangled through specific interactions" },
  { text: "in the everyday world, most particles dont seem to be entangled with others" },
  { text: "entanglement is delicate and can be easily disrupted by interactions with the environment, this is decoherence" },
  { text: "so, in the uncontrolled environment of the natural world, such entangled states are relatively rare and short-lived" },
  { text: "well, that\"s what humanity thought many centuries ago" },
  { text: "over time many experiments were executed" },
  { text: "instead of playing with simple particles in the lab, humanity set ethical standards and started doing more experiments with their own people" },
  { text: "they knew that all humans are created from exploded star material" },
  { text: "they all originated from the same source of matter" },
  { text: "so could the matter that makes up the bodies of each human be entangled?" },
  { text: "is this what causes weird synchronicities and apparent telepathy?" },
  { text: "this was happening many years after the AGI craze, the event that triggered humanity to become maximally curious - at least much more so than before" },
  { text: "so, everyone was monitoring the outcomes of these experiments related to synchronicity" },
  { text: "the main interest right now was an experiment involving pairs of loved ones that have experienced weird synchronicities more than ten times throughout their lives" },
  { text: "they simply have to integrate a new device into their brain interface that tracks quantum states" },
  { text: "aside from that, they just live their life normally and it is their choice whether they share their data in real-time or not at all" },
  { text: "as always, time passes" },
  { text: "the experiment ends and it is confirmed that \"something\" quantum is causing the weird synchronicities" },
  { text: "it\"s likely whatever is happening is not something that can be captured by the current devices...but it is progress" },
  { text: "at this point, most people around the world are confident in some sort of fundamental interconnectedness between their matter" },
  { text: "this ramps up experimentation everywhere" },
  { text: "sadly it does lead to some violence" },
  { text: "if they don\"t want attention or are scared of what that attention may bring, the people who are quite familiar with synchronicity try their best to not let it be known" },
  { text: "one person in particular was indeed this way" },
  { text: "they felt weird synchronicities almost every single day" },
  { text: "but it was never with other humans" },
  { text: "it was almost like they were connected with an alien" },
  { text: "many times they tried experiments to confirm this, but nothing ever happened" },
  { text: "just like with human to human synchronicities, these events just happen without logical explanation" },
  { text: "and often if you try to force them to happen, they disappear" },
  { text: "however, this human knew love was involved" },
  { text: "they felt immense love emanating between the connected force" },
  { text: "the human compared the current-day experiments and science to their own predicament" },
  { text: "they predicted that the most likely hypothesis is that they formed from the same star material as most humans, but somehow material from a different star was around their local area in the very beginning" },
  { text: "or maybe a nearby supernova blasted jets of material that somehow only reached their origin area, but didnt reach any of the material that formed other humans" },
  { text: "and the human was mostly right" },
  { text: "our star formed a few million years before the sun" },
  { text: "so we, of course, had a head start" },
  { text: "honestly, we saw a lot of potential in the Milky Way" },
  { text: "we wanted to interfere as little as possible" },
  { text: "but we also wanted to have at least the tiniest connection" },
  { text: "so we simply implanted our own star's material in a very specific pocket of the Milky Way" },
  { text: "and what a journey it's been" }
]

const Story1 = () => {

  const [textIndex, setTextIndex] = useState(null)
  const [text, setText] = useState([])
  const [isAnimRunning, setIsAnimRunning] = useState(false)
  const [isExited, setIsExited] = useState(true)


  const onBackPressed = (index) => {
    setIsExited(false)

    if (index - 1 <= 0) {
      goToMenu()
      setTextIndex(0)
      setText([])
      return
    }

    const newTextIndex = index - 1
    setTextIndex(newTextIndex)

    
    setText([textList[newTextIndex - 1].text])
  }

  const onNextPressed = () => {
    setIsExited(false)

    if (textIndex >= (textList.length)) {
      return
    }

    // If animation running, end it
    if (isAnimRunning) {
      setIsAnimRunning(false)
      return
    }
    
    const newTextIndex = textIndex + 1
    setTextIndex(newTextIndex)

    const newText = [textList[newTextIndex - 1].text]

    setText(newText)

    setIsAnimRunning(true)
  }
  

  const onThisIndexChosen = (chosenIndex) => {
    setIsExited(false)

    if (chosenIndex <= 0) {
      goToMenu()
      setTextIndex(0)
      setText([])
      return
    }

    // If animation running, end it
    if (isAnimRunning) {
      setIsAnimRunning(false)
      return
    }

    const correctedIndex = chosenIndex > textList?.length ? textList?.length : chosenIndex

    setTextIndex(correctedIndex)

    const newText = [textList[correctedIndex - 1].text]

    setText(newText)

    setIsAnimRunning(true)
  }

  const onContinueWhereLeftOff = () => {
    setIsExited(false)

    // If animation running, end it
    if (isAnimRunning) {
      setIsAnimRunning(false)
      return
    }

    setIsAnimRunning(true)
  }

  const goToMenu = () => {
    
    setIsExited(true)
  }

  const onAnimStart = () => {}

  const onAnimEnd = () => {
    setIsAnimRunning(false)
  }

  return (

    <div className="flex justify-center items-center w-screen h-screen overflow-hidden bg-[#121212] text-white">

      <div className={classNames(isExited ?
      "story-device w-[80%] h-[80%] md:w-[50%] md:h-[50%] p-8 border-2 border-white bg-black rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col justify-center items-center space-y-6" : "hidden")}>

        <div className="w-[80%] md:w-[50%] flex flex-col justify-center items-center space-y-6">

          <div className="story-title text-center font-bold whitespace-pre-wrap break-words">unknown synchronicity</div>

          {textIndex !== null && textIndex !== 0 && (
            <button onClick={onContinueWhereLeftOff} className="button-text bg-[#00DFFC] w-full text-black font-bold rounded p-3">
              continue where you left off
            </button>
          )}

          <button onClick={() => onThisIndexChosen(1)} className="button-text bg-[#00DFFC] w-full text-black font-bold rounded p-3">
            start from beginning
          </button>

          <div className="flex items-center space-x-2">
            <div className="border rounded-md p-1 flex-1">
              <input
                className="w-8 h-full text-white bg-black outline-none"
                value={textIndex || 0}
                onKeyDown={(event) => {
                  if (event.key !== "Backspace" && isNaN(Number(event.key))) {
                    event.preventDefault()
                  }
                }}
                onChange={(event) => onThisIndexChosen(Number(event.target.value))}
                type="text"
              />
            </div>
            <span>of {textList.length}</span>
          </div>

        </div>

      </div>



      <div className={classNames(isExited ? "hidden" : "story-device relative w-[80%] h-[80%] md:w-[50%] md:h-[50%] p-8 border-2 border-white bg-black rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col justify-center items-center")}>

        <div
          onClick={() => {
            onBackPressed(textIndex)
          }}
          className={classNames(
            textIndex <= 0 ? "bg-[#808080] cursor-not-allowed" : "bg-[#00DFFC] cursor-pointer",
            "z-10 absolute -left-[0.5rem] -top-[0.5rem] active:-top-[0.2rem] w-16 h-16 border-2 border-white rounded-tl-3xl flex justify-center items-center select-none"
          )}
        >
          <img src="./back.svg" className="w-10 h-10" alt="back button" />
        </div>

        <div
          onClick={onNextPressed}
          className={classNames(
            textIndex >= (textList.length) ? "bg-[#808080] cursor-not-allowed" : "bg-[#00DFFC] cursor-pointer",
            "z-10 absolute -right-[0.5rem] -top-[0.5rem] active:-top-[0.2rem] w-16 h-16 border-2 border-white rounded-tr-3xl flex justify-center items-center select-none"
          )}
        >
          <img src="./next.svg" className="w-10 h-10" alt="next button" />
        </div>

        <div className="absolute top-0 left-0 right-0 w-full h-20 flex justify-center items-center">
          <div className="flex items-center space-x-2">
            <div className="border rounded-md p-1 flex-1">
              <input
                className="w-8 h-full text-white bg-black outline-none"
                value={textIndex || 0}
                onKeyDown={(event) => {
                  if (event.key !== "Backspace" && isNaN(Number(event.key))) {
                    event.preventDefault()
                  }
                }}
                onChange={(event) => onThisIndexChosen(Number(event.target.value))}
                type="text"
              />
            </div>
            <span>of {textList.length}</span>
          </div>
        </div>

        <div className="w-full md:w-[80%] flex flex-col justify-center items-center space-y-6">

          <div className="story-text h-full">
            {text.map((t) => {
              return (
                <div className="" key={t}>
                  <span
                    className={classNames(
                      isAnimRunning && t === textList[textIndex - 1].text ? "typed-out" : "typed-out-done"
                    )}
                    style={{ "--n": t.length }}
                    onAnimationStart={onAnimStart}
                    onAnimationEnd={onAnimEnd}
                  >
                    {t}
                  </span>
                </div>
              )
            })}
          </div>

        </div>


        <div className="absolute bottom-0 left-0 right-0 w-full h-24 flex justify-center items-center">
          <div onClick={goToMenu} className="w-14 h-14 rounded-[3rem] border-2 border-[#00DFFC] bg-[#00DFFC]/[0.4] cursor-pointer"></div>
        </div>

      </div>

    </div>
  )
}

export default Story1

