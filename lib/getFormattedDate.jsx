import React from 'react'

const getFormattedDate = ({ dateString }) => {
  try {
    return new Intl.DateTimeFormat('sv-SV', { dateStyle: 'long' }).format(
      new Date(dateString)
    )
  } catch (error) {
    return dateString
  }
}

export default getFormattedDate
