const UtilMethods = {
  formatNumber: (number) => {
    return new Intl.NumberFormat("en", { minimumFractionDigits: 2 }).format(number)
  },
}

export default UtilMethods
