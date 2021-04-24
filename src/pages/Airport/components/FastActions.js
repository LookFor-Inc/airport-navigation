import React from 'react'
import BaggageIcon from '@/assets/icons/BaggageIcon'
import CovidIcon from '@/assets/icons/CovidIcon'
import MoneyIcon from '@/assets/icons/MoneyIcon'
import RestaurantIcon from '@/assets/icons/RestaurantIcon'
import ToiletIcon from '@/assets/icons/ToiletIcon'

function FastActions() {
  return (
    <div className="pt-5">
      <div className="mx-6 mb-1.5">
        <p className="uppercase text-gray-500 font-sans font-semibold font-xs">
          Быстрые действия
        </p>
      </div>
      <div className="overflow-x-scroll">
        <div className="flex ml-6">
          <button>
            <div className="flex flex-col items-center justify-center">
              <div className="min-width bg-gray-900 h-16 w-16 text-white text-center font-extrabold flex items-center
        justify-center rounded-full mb-2">
                <ToiletIcon/>
              </div>
              <div className="flex flex-col items-center justify-center h-9">
                <span className="text-center text-gray-900 font-sans font-semibold text-sm">
                Туалет
                </span>
              </div>
            </div>
          </button>
          <button>
            <div className="ml-6 flex flex-col items-center justify-center">
              <div className="min-width bg-gray-900 h-16 w-16 text-white text-center font-extrabold flex items-center
        justify-center rounded-full mb-2">
                <RestaurantIcon/>
              </div>
              <div className="flex flex-col items-center justify-center h-9">
                <span className="text-center text-gray-900 font-sans font-semibold text-sm overflow-visible">
                Рестораны
                </span>
              </div>
            </div>
          </button>
          <button>
            <div className="ml-6 flex flex-col items-center justify-center">
              <div className="min-width bg-gray-900 h-16 w-16 text-white text-center font-extrabold flex items-center
        justify-center rounded-full mb-2">
                <CovidIcon/>
              </div>
              <span className="text-center text-gray-900 font-sans font-semibold text-sm">
              Тест на Covid
              </span>
            </div>
          </button>
          <button>
            <div className="ml-6 flex flex-col items-center justify-center">
              <div className="min-width bg-gray-900 h-16 w-16 text-white text-center font-extrabold flex items-center
        justify-center rounded-full mb-2">
                <BaggageIcon/>
              </div>
              <span className="text-center text-gray-900 font-sans font-semibold text-sm">
              Упаковка багажа
              </span>
            </div>
          </button>
          <button>
            <div className="ml-6 flex flex-col items-center justify-center pr-6">
              <div className="min-width bg-gray-900 h-16 w-16 text-white text-center font-extrabold flex items-center
        justify-center rounded-full mb-2">
                <MoneyIcon/>
              </div>
              <span className="text-center text-gray-900 font-sans font-semibold text-sm">Обмен валют</span>
            </div>
          </button>
          {/* eslint-disable-next-line max-len */}
          { /* <div className="ml-6 min-width bg-gray-900 h-16 w-16 text-white text-center font-extrabold flex items-center
        justify-center rounded-full">
            <RestaurantIcon/>
          </div>
          <div className="ml-6 min-width bg-gray-900 h-16 w-16 text-white text-center font-extrabold flex items-center
        justify-center rounded-full">
            <CovidIcon/>
          </div>
          <div className="ml-6 min-width bg-gray-900 h-16 w-16 text-white text-center font-extrabold flex items-center
        justify-center rounded-full">
            <BaggageIcon/>
          </div>
          <div className="ml-6 min-width bg-gray-900 h-16 w-16 text-white text-center font-extrabold flex items-center
        justify-center rounded-full">
            <MoneyIcon/>
          </div>*/}
        </div>
      </div>
    </div>
  )
}

export default FastActions
