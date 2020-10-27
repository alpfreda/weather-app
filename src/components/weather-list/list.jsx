import React, { useMemo} from 'react'
import { useWeatherBatchApi } from '../../services/weather'
import Loader from '../common/loader'
import Item from './item'

const defaultCities = [
    { id: 2643743, name: 'London' },
    { id: 745044, name: 'Istanbul' },
    { id: 2968815, name: 'Paris' },
    { id: 1704129, name: 'Madrid' },
    { id: 3173435, name: 'Milan' },
]

const List = () => {
    // decorate by ids and cache them
    const cities = useMemo(() => defaultCities.map(city => city.id), [])
    const [{ list, isLoading, isError }] = useWeatherBatchApi(cities, [])

    return <>
        {isError && <div>Something went wrong ...</div>}
        {isLoading ? <Loader /> :
            <>
                <h3 className='big-title'>Click On city for more detail</h3>
                <div className='weather-list-wrapper'>
                    {
                        list.map(city => {
                            return <Item key={city.id} {...city} />
                        })
                    }
                </div>
            </>
        }
    </>
}

export default List