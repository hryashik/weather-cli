interface IRes {
   c: undefined | string
   h: boolean
   t: undefined | string
}

export function getArgs(processArgs: string[]) {
   const res: IRes = {
      c: undefined,
      h: false,
      t: undefined
   }
   const args = processArgs.slice(2)
   args.forEach((el, idx, array) => {
      if (array.length > 1) {
         if (el === '-c' && array[idx + 1][0] !== '-') {
            res.c = array[idx + 1]
         } else if (el === '-t' && array[idx + 1][0] !== '-') {
            res.t = array[idx + 1]
         }
      }

      if (el === '-h') {
         res.h = true
      }
   })
   return res
}