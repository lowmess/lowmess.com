const verticalRhythm = {
  '& > *': {
    // reset all margins
    marginY: 0,

    // margin top to all child elements
    '& + *': {
      marginTop: 3,
    },
  },
}

const measure = {
  maxWidth: '33em',
}

const blockShape = {
  borderLeft: 4,
  borderColor: 'orange',
  borderRadius: 1,
  padding: 3,
}

export { verticalRhythm, measure, blockShape }
