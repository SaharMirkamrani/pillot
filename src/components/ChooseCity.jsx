import { useState, useEffect, useCallback,useContext } from 'react';
import { Link } from 'react-router-dom';
import { TiTimes } from 'react-icons/ti';
import axios from 'axios';
import {AdsContext} from "../ListProvider";

const ChooseCity = () => {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [states, setStates] = useState([]);
  const {state: activeState, setState: setActiveState} = useContext(AdsContext);

  const getStates = useCallback(async () => {
    const headers = { token: 'test' };
    const response = await fetch('http://site.pillot.ir/admin/States/API/_apistate', { headers });
    const data = await response.json();
    setStates(data.data);
  },[setStates]);

  useEffect(() => {
    getStates();
  }, [getStates]);

  return (
    <>
      <button
        type="button"
        className="px-3 py-1 mr-10 focus:outline-none rounded-md border-2 text-gray-500 hover:text-gray-700 transition duration-150 hover:border-gray-300"
        onClick={() => setShowModal(true)}
      >
        {activeState ? activeState : "انتخاب شهر"}
        
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none animate-fade-in-down">
            <div className="relative sm:w-1/2 lg:w-4/12 my-6 mx-auto max-w-2xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="w-full max-w-md m-auto bg-white rounded-lg shadow-default p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-primary mb-10 mt-2 text-center">انتخاب استان</h4>
                    <button
                      className="p-1 mb-10 mt-2 mr-auto bg-transparent border-0 text-black float-left text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <TiTimes className="text-gray-500 hover:text-gray-700" />
                    </button>
                  </div>

                  <form>
                    <div>
                      <label htmlFor="searchCity" className="text-sm text-gray-600">
                        جستجوی استان
                      </label>
                      <input
                        name="searchCity"
                        type="text"
                        className={`w-full mt-1 p-2 text-primary border border-gray-300 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:ring-2 focus:ring-lightYellow focus:border-transparent`}
                        id="searchCity"
                        onChange={e => setSearchValue(e.target.value)}
                        value={searchValue}
                      />
                    </div>
                  </form>

                  <h3>استان ها</h3>
                  <div className="flex justify-evenly flex-wrap">
                    {searchValue
                      ? states
                          .filter(state => state.state_name.includes(searchValue))
                          .map((state, index) => {
                            return (
                              <div key={index}>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setActiveState(state.state_name);
                                    setShowModal(false);
                                  }}
                                  className={`${
                                    activeState === state.state_name
                                      ? `bg-darkYellow border-darkYellow hover:border-yellow hover:bg-yellow hover:text-gray-800 text-white m-2 border-2 focus:outline-none transition duration-150 py-2 px-4 rounded`
                                      : `bg-white border-2 m-2 border-yellow text-gray-500 focus:outline-none hover:text-gray-800 hover:border-darkYellow transition duration-150 py-2 px-4 rounded`
                                  }`}
                                >
                                  {state.state_name}
                                </button>
                                <CitiesButtons
                                  id={state.state_id}
                                  setShowModal={setShowModal}
                                  active={active}
                                  setActive={setActive}
                                  states={states}
                                  setStates={setStates}
                                  searchValue={searchValue}
                                />
                              </div>
                            );
                          })
                      : states.map((state, index) => {
                          return (
                            <div key={index}>
                              <button
                                type="button"
                                onClick={() => {
                                  setActiveState(state.state_name);
                                  setShowModal(false);
                                }}
                                className={`${
                                  activeState === state.state_name
                                    ? `bg-darkYellow border-darkYellow hover:border-yellow hover:bg-yellow hover:text-gray-800 text-white m-2 border-2 focus:outline-none transition duration-150 py-2 px-4 rounded`
                                    : `bg-white border-2 m-2 border-yellow text-gray-500 focus:outline-none hover:text-gray-800 hover:border-darkYellow transition duration-150 py-2 px-4 rounded`
                                }`}
                              >
                                {state.state_name}
                              </button>
                              <CitiesButtons
                                id={state.state_id}
                                setShowModal={setShowModal}
                                active={active}
                                setStates={setStates}
                                searchValue={searchValue}
                              />
                            </div>
                          );
                        })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ChooseCity;

const CitiesButtons = ({ setShowModal, active, setActive, searchValue, id }) => {
  const [cities, setCities] = useState([]);

  const getCities = useCallback(async () => {
    axios
      .post(
        'http://site.pillot.ir/admin/Cities/API/_apicities',
        {
          state_id: id
        },
        {
          headers: {
            token: 'test'
          }
        }
      )
      .then(response => {
        setCities(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  useEffect(() => {
    getCities();
  }, [getCities]);

  console.log(cities);

  return (
    <>
      {cities &&
        cities.map((city, index) => {
          return (
            <button
              key={index}
              type="button"
              onClick={() => {
                setActive(city.name);
                setShowModal(false);
              }}
              className={`${
                active === city.name
                  ? `bg-darkYellow border-darkYellow hover:border-yellow hover:bg-yellow hover:text-gray-800 text-white m-2 border-2 focus:outline-none transition duration-150 py-2 px-4 rounded`
                  : `bg-white border-2 m-2 border-yellow text-gray-500 focus:outline-none hover:text-gray-800 hover:border-darkYellow transition duration-150 py-2 px-4 rounded`
              }`}
            >
              {city.name}
            </button>
          );
        })}
    </>
  );
};
