import { useAppStore } from "../store"
import countDaysInMonth from "../helpers/count-days-in-month";

function HabitTable() {
  const { numberOfRows } = useAppStore()


  const currentDate = new Date()
  const weekday = ["S","M","T","W","T","F","S"];

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const numberOfDays = countDaysInMonth(year, month)

  const getDayOfWeekLetter = (year: number, month: number, day: number) => {
    const date = new Date(year, month, day)

    return weekday[date.getDay()]
  }

  return (
    <div>
      <table className='habit-table table-auto border-collapse'>
        <thead>
          <tr>
            <th
              className="w-full h-7 pl-4 text-left">
              <span className="text-[10px] text-slate-300">MONTH</span>
            </th>
            { [...Array(numberOfDays)].map((_, i) => {
              return (
                <th className="h-7 w-7 min-w-7">
                  <div>
                    {i + 1}
                  </div>
                  <div>
                    {getDayOfWeekLetter(year, month, i + 1)}
                  </div>
                </th>
              )
            }) }
          </tr>
        </thead>
        <tbody>
          { [...Array(numberOfRows)].map(() => {
            return (
              <tr>
                <td className="w-7 h-7"></td>
                { [...Array(numberOfDays)].map(() => {
                  return (
                    <td className="w-7 h-7">
                    </td>
                  )
                }) }
              </tr>
            )
          }) }
        </tbody>
      </table>
    </div>
  )
}

export default HabitTable
