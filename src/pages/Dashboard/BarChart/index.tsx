import { Bar } from 'react-chartjs-2'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

import { useContext } from 'react'
import { PropertiesContext } from '../../../contexts/PropertiesContext'

interface GroupedData {
  [category: string]: { total: number; count: number }
}

export function BarChart() {
  const { properties } = useContext(PropertiesContext)

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  )

  const groupedData: GroupedData = properties.reduce(
    (acc: GroupedData, property) => {
      const category = property.category
      const price = property.price

      if (!acc[category]) {
        acc[category] = { total: 0, count: 0 }
      }

      acc[category].total += price
      acc[category].count += 1

      return acc
    },
    {},
  )

  const averagePrices = Object.entries(groupedData).map(([category, data]) => ({
    category,
    averagePrice: data.total / data.count,
  }))

  const labels = averagePrices.map((entry) => entry.category)
  const data = {
    labels,
    datasets: [
      {
        label: 'Preço Médio por Categoria',
        data: averagePrices.map((entry) => entry.averagePrice),
        backgroundColor: [
          'hsla(240, 6%, 35%, 1)',
          'hsla(240, 6%, 40%, 1)',
          'hsla(240, 6%, 45%, 1)',
        ],
        borderWidth: 0,
      },
    ],
  }

  const options = {
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
          },
          color: '#C4C4C4',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 12,
          },
          color: '#C4C4C4',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Preço Médio por Categoria',
        font: {
          size: 14,
          weight: 'bold',
        } as const,
        color: '#C4C4C4',
      },
    },
  }

  return <Bar options={options} data={data} />
}
