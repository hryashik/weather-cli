interface IRes {
   s: undefined | string
   h: boolean
   t: undefined | string
}

export function getArgs(args: string[]) {
   const res: IRes = {
      s: undefined,
      h: false,
      t: undefined
   }
   const [exec, path, ...rest] = args
   rest.forEach((el, idx, array) => {
      if (rest.length > 1) {
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