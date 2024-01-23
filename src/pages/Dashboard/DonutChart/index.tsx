import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { useContext, useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { PropertiesContext } from '../../../contexts/PropertiesContext'
import { ArticleContainer, ChartContainer, Label } from './styles'

ChartJS.register(ArcElement, Tooltip, Legend)

interface TooltipItem {
  dataIndex: number
  parsed: number
}

export function DonutChart() {
  const [groupedData, setGroupedData] = useState({
    casa: 0,
    apartamento: 0,
    terreno: 0,
    total: 0,
  })

  const { properties } = useContext(PropertiesContext)

  useEffect(() => {
    const newData = properties.reduce(
      (acc, property) => {
        acc.casa = acc.casa || 0
        acc.apartamento = acc.apartamento || 0
        acc.terreno = acc.terreno || 0
        acc.total = acc.total || 0

        if (property.type === 'Casa') {
          acc.casa += 1
          acc.total += 1
        } else if (property.type === 'Apartamento') {
          acc.apartamento += 1
          acc.total += 1
        } else if (property.type === 'Terreno') {
          acc.terreno += 1
          acc.total += 1
        }

        return acc
      },
      { casa: 0, apartamento: 0, terreno: 0, total: 0 },
    )

    setGroupedData(newData)
  }, [properties])

  const generateData = (type: string) => {
    return {
      labels: ['Total', type],
      datasets: [
        {
          data: [
            1 -
              groupedData[type as keyof typeof groupedData] / groupedData.total,
            groupedData[type as keyof typeof groupedData] / groupedData.total,
          ],
          backgroundColor: ['hsla(240, 6%, 35%, 1)', 'hsla(240, 6%, 45%, 1)'],
          borderWidth: 0,
        },
      ],
    }
  }

  const options = {
    cutout: '65%',
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem) => {
            const label = ''
            const value = tooltipItem.parsed * 100
            return `${label} ${value.toFixed()}%`
          },
        },
      },
      legend: {
        display: false,
      },
    },
  }

  return (
    <ArticleContainer>
      <ChartContainer>
        <div>
          <Doughnut data={generateData('casa')} options={options} />
        </div>
        <Label>
          <span>{`${(groupedData.casa / groupedData.total) * 100}%`}</span>
          <p>Imóveis do tipo casa</p>
        </Label>
      </ChartContainer>
      <ChartContainer>
        <div>
          <Doughnut data={generateData('apartamento')} options={options} />
        </div>
        <Label>
          <span>{`${
            (groupedData.apartamento / groupedData.total) * 100
          }%`}</span>
          <p>Imóveis do tipo apartamento</p>
        </Label>
      </ChartContainer>
      <ChartContainer>
        <div>
          <Doughnut data={generateData('terreno')} options={options} />
        </div>
        <Label>
          <span>{`${(groupedData.terreno / groupedData.total) * 100}%`}</span>
          <p>Imóveis do tipo terreno</p>
        </Label>
      </ChartContainer>
    </ArticleContainer>
  )
}
