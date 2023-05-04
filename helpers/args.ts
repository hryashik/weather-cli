interface IRes {
   s: undefined | string
   h: boolean
   t: undefined | string
}

export function getArgs(processArgs: string[]) {
   const res: IRes = {
      s: undefined,
      h: false,
      t: undefined
   }
   const args = processArgs.slice(2)
   args.forEach((el, idx, array) => {
      if (array.length > 1) {
         if (el === '-s' && array[idx + 1][0] !== '-') {
            res.s = array[idx + 1]
         }
      }

      if (el === '-h') {
         res.h = true
      }
   })
   return res
}