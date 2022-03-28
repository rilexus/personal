import posed from "react-pose"

const FadeInTransition = posed.div({
  init: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: () => ({
      opacity: { duration: 700 },
    }),
  },
  exit: {
    opacity: 0,
    transition: () => ({
      opacity: { duration: 70 },
    }),
  },
})
export {FadeInTransition}
