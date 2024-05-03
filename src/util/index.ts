export const formatTerperture = (temperture: number): number => {
  const kelvin = 273.15
  return parseInt((temperture - kelvin).toString())
}