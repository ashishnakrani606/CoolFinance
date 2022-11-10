import React from 'react'
import Image from 'next/image';
import Lock from '../assets/img/lock.svg'

const Wallets = () => {
  return (
    <div className='max-w-[1203px] w-full mx-auto px-5 pt-10'>
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='xl:text-[40px] text-[32px] lg:leading-6 leading-snug font-bold text-primaryDarkBlue'>Wallets</h2>
          </div>
          <div className="add-btn flex">
            <button className='wallet-btn justify-center md:mr-[14px] md:!px-[23px] !px-0 flex items-center md:w-auto w-[82px] border-transparent white-plus-icon border  hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
              <g id="Group_309" data-name="Group 309" transform="translate(-1578 -601.5)">
                <line id="Line_37" data-name="Line 37" y2="11" transform="translate(1584.5 602.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                <line id="Line_38" data-name="Line 38" y2="11" transform="translate(1590 608) rotate(90)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
              </g>
            </svg>
              <span className='md:ml-3 ml-[7px] md:text-base text-[10px]'>
              Add wallet
              </span>
            </button>
            <div className="md:block hidden">
              <button className='wallet-btn items-center flex border-transparent border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
                  <g id="Group_309" data-name="Group 309" transform="translate(-1578 -601.5)">
                    <line id="Line_37" data-name="Line 37" y2="11" transform="translate(1584.5 602.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                    <line id="Line_38" data-name="Line 38" y2="11" transform="translate(1590 608) rotate(90)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                  </g>
                </svg>
                <span className='ml-3'>
                Create Multisig Wallet
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className='border-gray300 md:mt-[30px] mt-5 border rounded-[10px] my-4 overflow-x-auto '>
          <div className='data-table md:p-4 p-5 pt-3 w-[961px] xl:w-full text-left'>
            <div className='inline-flex w-full border-b border-white100 justify-between'> 
              <div className='sm:w-[370px] w-[120px]'>
                <h3 className='pb-2 text-[10px] text-gray900 opacity-40'>Address</h3>
              </div>
              <div className='w-[88px] md:block hidden'>
                <h3 className=' pb-2 text-[10px] text-gray900 opacity-40'>Type</h3>
              </div>
              <div className='w-[100px] md:block hidden'>
                <h3 className=' pb-2 text-[10px] text-gray900 opacity-40'>Chain</h3>
              </div>
              <div className='md:w-[283px] w-[97px]'>
                <h3 className='pb-2 text-[10px] text-gray900 opacity-40'>Manage</h3>
              </div>
            </div>
            <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
              <div className='sm:w-[370px] w-[120px]'><p className='text-gray900 text-sm'>0x65A12C313fE8d5bC33255178fe5f874DA43F6P06</p></div>
              <div className='md:block hidden w-[88px]'><p className='text-gray900 text-sm font-light'>EOA</p></div>
              <div className='md:block hidden w-[100px]'><p className='text-gray900 text-sm font-light'>Multichain</p></div>
              <div>
              <div className="flex items-center">
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 md:px-[30px] pl-[6px] pr-[7px] md:w-auto w-[30px] rounded text-white text-[10px] md:h-auto h-[30px] md:border-transparent border-primaryBlue border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                    <span className='md:hidden block mr-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17.235" height="12.613" viewBox="0 0 17.235 12.613">
                        <g id="Group_1931" data-name="Group 1931" transform="translate(-546 -190.41)">
                          <path id="Path_86" data-name="Path 86" d="M16.275,80.045a9.322,9.322,0,0,1-8.4-5.35,2.249,2.249,0,0,1,0-1.913,9.276,9.276,0,0,1,16.808,0,2.248,2.248,0,0,1,0,1.914A9.32,9.32,0,0,1,16.275,80.045Zm0-10.917A7.619,7.619,0,0,0,9.406,73.5a.558.558,0,0,0,0,.474,7.579,7.579,0,0,0,13.736,0,.554.554,0,0,0,0-.473A7.62,7.62,0,0,0,16.275,69.128Z" transform="translate(538.343 122.978)" fill="#fff"/>
                          <path id="Path_87" data-name="Path 87" d="M18.448,78.966a4.036,4.036,0,1,1,4.036-4.036A4.04,4.04,0,0,1,18.448,78.966Zm0-6.376a2.34,2.34,0,1,0,2.34,2.34A2.342,2.342,0,0,0,18.448,72.59Z" transform="translate(536.17 121.864)" fill="#fff"/>
                        </g>
                      </svg>
                    </span>
                    <span className='md:block hidden'>View</span>
                  </button>
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center border-gray900 py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[10px]  md:h-auto h-[30px] border-transparent border hover:border-gray900 hover:text-white hover:bg-gray900 duration-300 edit-icon'>
                    <span  className='md:hidden block'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12.876" height="12.875" viewBox="0 0 12.876 12.875">
                        <g id="Group_1941" data-name="Group 1941" transform="translate(-39.429 -66.581)">
                          <path id="Path_97" data-name="Path 97" d="M49.378,79.456H42.355a2.93,2.93,0,0,1-2.926-2.926V69.507a2.93,2.93,0,0,1,2.926-2.926h5.12a.793.793,0,0,1,0,1.586h-5.12a1.342,1.342,0,0,0-1.34,1.34V76.53a1.342,1.342,0,0,0,1.34,1.34h7.023a1.343,1.343,0,0,0,1.341-1.34V71.41a.793.793,0,0,1,1.586,0v5.12A2.93,2.93,0,0,1,49.378,79.456Z" fill="#333"/>
                          <g id="Group_1940" data-name="Group 1940" transform="translate(44.129 66.683)">
                            <path id="Path_98" data-name="Path 98" d="M47.053,78.643l1.21-.3-1.116-1.116-.3,1.21A.173.173,0,0,0,47.053,78.643Z" transform="translate(-46.838 -70.574)" fill="#333"/>
                            <path id="Path_99" data-name="Path 99" d="M58.009,68.441l.346-.346a.793.793,0,0,0,0-1.121h0a.792.792,0,0,0-1.122,0l-.345.345Z" transform="translate(-50.513 -66.741)" fill="#333"/>
                            <rect id="Rectangle_2196" data-name="Rectangle 2196" width="7.323" height="1.586" transform="translate(0.749 6.204) rotate(-45)" fill="#333"/>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className='md:block hidden'>Edit</span>
                  </button>
                  <button className='wallet-btn flex items-center border-[#FF0000] border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[#FF0000] text-[10px]  md:h-auto h-[30px] hover:border-[#FF0000] hover:text-white hover:bg-[#FF0000] duration-300 delet-icon'>
                    <span  className='md:hidden block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.608" height="14.633" viewBox="0 0 12.608 14.633">
                      <g id="Group_1935" data-name="Group 1935" transform="translate(-48.545 -65.265)">
                        <g id="Group_1927" data-name="Group 1927" transform="translate(48.545 65.265)">
                          <path id="Path_90" data-name="Path 90" d="M79.029,71.359H70.655a.847.847,0,0,0-.845.912l.678,8.8a.848.848,0,0,0,.845.783h7.018a.848.848,0,0,0,.845-.783l.678-8.8a.847.847,0,0,0-.845-.912Zm-1.463,8.8H72.118l-.547-7.108h6.543Z" transform="translate(-68.539 -67.225)" fill="#fa141b"/>
                          <path id="Path_91" data-name="Path 91" d="M78.7,80.54h.044a.847.847,0,0,0,.846-.8l.227-4.378a.848.848,0,1,0-1.693-.087L77.9,79.65A.847.847,0,0,0,78.7,80.54Z" transform="translate(-71.141 -68.226)" fill="#fa141b"/>
                          <path id="Path_92" data-name="Path 92" d="M74.8,80.542h.044a.847.847,0,0,0,.8-.89l-.227-4.378a.856.856,0,0,0-.89-.8.847.847,0,0,0-.8.89l.227,4.378A.847.847,0,0,0,74.8,80.542Z" transform="translate(-69.801 -68.226)" fill="#fa141b"/>
                          <path id="Path_93" data-name="Path 93" d="M79.7,67.309H76.806v-.222a1.825,1.825,0,0,0-1.823-1.822H73.5a1.824,1.824,0,0,0-1.822,1.822v.222H68.785a.848.848,0,1,0,0,1.7H79.7a.848.848,0,0,0,0-1.7Zm-6.325,0v-.222a.127.127,0,0,1,.126-.126h1.485a.127.127,0,0,1,.127.126v.222Z" transform="translate(-67.937 -65.265)" fill="#fa141b"/>
                        </g>
                      </g>
                    </svg>
                    </span>
                    <span className='md:block hidden'>Delete</span>
                  </button>
                </div>
              </div>
            </div>
            <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
              <div className='sm:w-[370px] w-[120px]'><p className='text-gray900 text-sm'>0x7915a6eb0403e0715e9d2a5c097aa709b35bd896</p></div>
              <div className='md:block hidden w-[88px]'><p className='text-gray900 text-sm font-light flex items-center'>Multisig <span className='ml-3'><Image src={Lock} alt="" /></span></p></div>
              <div className='md:block hidden w-[100px]'><p className='text-gray900 text-sm font-light'>Arbidivum</p></div>
              <div>
              <div className="flex items-center">
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 md:px-[30px] pl-[6px] pr-[7px] md:w-auto w-[30px] rounded text-white text-[10px] md:h-auto h-[30px] md:border-transparent border-primaryBlue border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                    <span className='md:hidden block mr-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17.235" height="12.613" viewBox="0 0 17.235 12.613">
                        <g id="Group_1931" data-name="Group 1931" transform="translate(-546 -190.41)">
                          <path id="Path_86" data-name="Path 86" d="M16.275,80.045a9.322,9.322,0,0,1-8.4-5.35,2.249,2.249,0,0,1,0-1.913,9.276,9.276,0,0,1,16.808,0,2.248,2.248,0,0,1,0,1.914A9.32,9.32,0,0,1,16.275,80.045Zm0-10.917A7.619,7.619,0,0,0,9.406,73.5a.558.558,0,0,0,0,.474,7.579,7.579,0,0,0,13.736,0,.554.554,0,0,0,0-.473A7.62,7.62,0,0,0,16.275,69.128Z" transform="translate(538.343 122.978)" fill="#fff"/>
                          <path id="Path_87" data-name="Path 87" d="M18.448,78.966a4.036,4.036,0,1,1,4.036-4.036A4.04,4.04,0,0,1,18.448,78.966Zm0-6.376a2.34,2.34,0,1,0,2.34,2.34A2.342,2.342,0,0,0,18.448,72.59Z" transform="translate(536.17 121.864)" fill="#fff"/>
                        </g>
                      </svg>
                    </span>
                    <span className='md:block hidden'>View</span>
                  </button>
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center border-gray900 py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[10px]  md:h-auto h-[30px] border-transparent border hover:border-gray900 hover:text-white hover:bg-gray900 duration-300 edit-icon'>
                    <span  className='md:hidden block'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12.876" height="12.875" viewBox="0 0 12.876 12.875">
                        <g id="Group_1941" data-name="Group 1941" transform="translate(-39.429 -66.581)">
                          <path id="Path_97" data-name="Path 97" d="M49.378,79.456H42.355a2.93,2.93,0,0,1-2.926-2.926V69.507a2.93,2.93,0,0,1,2.926-2.926h5.12a.793.793,0,0,1,0,1.586h-5.12a1.342,1.342,0,0,0-1.34,1.34V76.53a1.342,1.342,0,0,0,1.34,1.34h7.023a1.343,1.343,0,0,0,1.341-1.34V71.41a.793.793,0,0,1,1.586,0v5.12A2.93,2.93,0,0,1,49.378,79.456Z" fill="#333"/>
                          <g id="Group_1940" data-name="Group 1940" transform="translate(44.129 66.683)">
                            <path id="Path_98" data-name="Path 98" d="M47.053,78.643l1.21-.3-1.116-1.116-.3,1.21A.173.173,0,0,0,47.053,78.643Z" transform="translate(-46.838 -70.574)" fill="#333"/>
                            <path id="Path_99" data-name="Path 99" d="M58.009,68.441l.346-.346a.793.793,0,0,0,0-1.121h0a.792.792,0,0,0-1.122,0l-.345.345Z" transform="translate(-50.513 -66.741)" fill="#333"/>
                            <rect id="Rectangle_2196" data-name="Rectangle 2196" width="7.323" height="1.586" transform="translate(0.749 6.204) rotate(-45)" fill="#333"/>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className='md:block hidden'>Edit</span>
                  </button>
                  <button className='wallet-btn flex items-center border-[#FF0000] border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[#FF0000] text-[10px]  md:h-auto h-[30px] hover:border-[#FF0000] hover:text-white hover:bg-[#FF0000] duration-300 delet-icon'>
                    <span  className='md:hidden block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.608" height="14.633" viewBox="0 0 12.608 14.633">
                      <g id="Group_1935" data-name="Group 1935" transform="translate(-48.545 -65.265)">
                        <g id="Group_1927" data-name="Group 1927" transform="translate(48.545 65.265)">
                          <path id="Path_90" data-name="Path 90" d="M79.029,71.359H70.655a.847.847,0,0,0-.845.912l.678,8.8a.848.848,0,0,0,.845.783h7.018a.848.848,0,0,0,.845-.783l.678-8.8a.847.847,0,0,0-.845-.912Zm-1.463,8.8H72.118l-.547-7.108h6.543Z" transform="translate(-68.539 -67.225)" fill="#fa141b"/>
                          <path id="Path_91" data-name="Path 91" d="M78.7,80.54h.044a.847.847,0,0,0,.846-.8l.227-4.378a.848.848,0,1,0-1.693-.087L77.9,79.65A.847.847,0,0,0,78.7,80.54Z" transform="translate(-71.141 -68.226)" fill="#fa141b"/>
                          <path id="Path_92" data-name="Path 92" d="M74.8,80.542h.044a.847.847,0,0,0,.8-.89l-.227-4.378a.856.856,0,0,0-.89-.8.847.847,0,0,0-.8.89l.227,4.378A.847.847,0,0,0,74.8,80.542Z" transform="translate(-69.801 -68.226)" fill="#fa141b"/>
                          <path id="Path_93" data-name="Path 93" d="M79.7,67.309H76.806v-.222a1.825,1.825,0,0,0-1.823-1.822H73.5a1.824,1.824,0,0,0-1.822,1.822v.222H68.785a.848.848,0,1,0,0,1.7H79.7a.848.848,0,0,0,0-1.7Zm-6.325,0v-.222a.127.127,0,0,1,.126-.126h1.485a.127.127,0,0,1,.127.126v.222Z" transform="translate(-67.937 -65.265)" fill="#fa141b"/>
                        </g>
                      </g>
                    </svg>
                    </span>
                    <span className='md:block hidden'>Delete</span>
                  </button>
                </div>
              </div>
            </div>
            <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
              <div className='sm:w-[370px] w-[120px]'><p className='text-gray900 text-sm'>0x86c4A74e1283AA79504183A8DAF1B4F4D424b9F7</p></div>
              <div className='md:block hidden w-[88px]'><p className='text-gray900 text-sm font-light'>EOA</p></div>
              <div className='md:block hidden w-[100px]'><p className='text-gray900 text-sm font-light'>Polygon</p></div>
              <div>
              <div className="flex items-center">
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 md:px-[30px] pl-[6px] pr-[7px] md:w-auto w-[30px] rounded text-white text-[10px] md:h-auto h-[30px] md:border-transparent border-primaryBlue border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                    <span className='md:hidden block mr-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17.235" height="12.613" viewBox="0 0 17.235 12.613">
                        <g id="Group_1931" data-name="Group 1931" transform="translate(-546 -190.41)">
                          <path id="Path_86" data-name="Path 86" d="M16.275,80.045a9.322,9.322,0,0,1-8.4-5.35,2.249,2.249,0,0,1,0-1.913,9.276,9.276,0,0,1,16.808,0,2.248,2.248,0,0,1,0,1.914A9.32,9.32,0,0,1,16.275,80.045Zm0-10.917A7.619,7.619,0,0,0,9.406,73.5a.558.558,0,0,0,0,.474,7.579,7.579,0,0,0,13.736,0,.554.554,0,0,0,0-.473A7.62,7.62,0,0,0,16.275,69.128Z" transform="translate(538.343 122.978)" fill="#fff"/>
                          <path id="Path_87" data-name="Path 87" d="M18.448,78.966a4.036,4.036,0,1,1,4.036-4.036A4.04,4.04,0,0,1,18.448,78.966Zm0-6.376a2.34,2.34,0,1,0,2.34,2.34A2.342,2.342,0,0,0,18.448,72.59Z" transform="translate(536.17 121.864)" fill="#fff"/>
                        </g>
                      </svg>
                    </span>
                    <span className='md:block hidden'>View</span>
                  </button>
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center border-gray900 py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[10px]  md:h-auto h-[30px] border-transparent border hover:border-gray900 hover:text-white hover:bg-gray900 duration-300 edit-icon'>
                    <span  className='md:hidden block'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12.876" height="12.875" viewBox="0 0 12.876 12.875">
                        <g id="Group_1941" data-name="Group 1941" transform="translate(-39.429 -66.581)">
                          <path id="Path_97" data-name="Path 97" d="M49.378,79.456H42.355a2.93,2.93,0,0,1-2.926-2.926V69.507a2.93,2.93,0,0,1,2.926-2.926h5.12a.793.793,0,0,1,0,1.586h-5.12a1.342,1.342,0,0,0-1.34,1.34V76.53a1.342,1.342,0,0,0,1.34,1.34h7.023a1.343,1.343,0,0,0,1.341-1.34V71.41a.793.793,0,0,1,1.586,0v5.12A2.93,2.93,0,0,1,49.378,79.456Z" fill="#333"/>
                          <g id="Group_1940" data-name="Group 1940" transform="translate(44.129 66.683)">
                            <path id="Path_98" data-name="Path 98" d="M47.053,78.643l1.21-.3-1.116-1.116-.3,1.21A.173.173,0,0,0,47.053,78.643Z" transform="translate(-46.838 -70.574)" fill="#333"/>
                            <path id="Path_99" data-name="Path 99" d="M58.009,68.441l.346-.346a.793.793,0,0,0,0-1.121h0a.792.792,0,0,0-1.122,0l-.345.345Z" transform="translate(-50.513 -66.741)" fill="#333"/>
                            <rect id="Rectangle_2196" data-name="Rectangle 2196" width="7.323" height="1.586" transform="translate(0.749 6.204) rotate(-45)" fill="#333"/>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className='md:block hidden'>Edit</span>
                  </button>
                  <button className='wallet-btn flex items-center border-[#FF0000] border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[#FF0000] text-[10px]  md:h-auto h-[30px] hover:border-[#FF0000] hover:text-white hover:bg-[#FF0000] duration-300 delet-icon'>
                    <span  className='md:hidden block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.608" height="14.633" viewBox="0 0 12.608 14.633">
                      <g id="Group_1935" data-name="Group 1935" transform="translate(-48.545 -65.265)">
                        <g id="Group_1927" data-name="Group 1927" transform="translate(48.545 65.265)">
                          <path id="Path_90" data-name="Path 90" d="M79.029,71.359H70.655a.847.847,0,0,0-.845.912l.678,8.8a.848.848,0,0,0,.845.783h7.018a.848.848,0,0,0,.845-.783l.678-8.8a.847.847,0,0,0-.845-.912Zm-1.463,8.8H72.118l-.547-7.108h6.543Z" transform="translate(-68.539 -67.225)" fill="#fa141b"/>
                          <path id="Path_91" data-name="Path 91" d="M78.7,80.54h.044a.847.847,0,0,0,.846-.8l.227-4.378a.848.848,0,1,0-1.693-.087L77.9,79.65A.847.847,0,0,0,78.7,80.54Z" transform="translate(-71.141 -68.226)" fill="#fa141b"/>
                          <path id="Path_92" data-name="Path 92" d="M74.8,80.542h.044a.847.847,0,0,0,.8-.89l-.227-4.378a.856.856,0,0,0-.89-.8.847.847,0,0,0-.8.89l.227,4.378A.847.847,0,0,0,74.8,80.542Z" transform="translate(-69.801 -68.226)" fill="#fa141b"/>
                          <path id="Path_93" data-name="Path 93" d="M79.7,67.309H76.806v-.222a1.825,1.825,0,0,0-1.823-1.822H73.5a1.824,1.824,0,0,0-1.822,1.822v.222H68.785a.848.848,0,1,0,0,1.7H79.7a.848.848,0,0,0,0-1.7Zm-6.325,0v-.222a.127.127,0,0,1,.126-.126h1.485a.127.127,0,0,1,.127.126v.222Z" transform="translate(-67.937 -65.265)" fill="#fa141b"/>
                        </g>
                      </g>
                    </svg>
                    </span>
                    <span className='md:block hidden'>Delete</span>
                  </button>
                </div>
              </div>
            </div>
            <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
              <div className='sm:w-[370px] w-[120px]'><p className='text-gray900 text-sm'>0xCC5596Fb286aac19729cFecc855F37Fb09080ef2</p></div>
              <div className='md:block hidden w-[88px]'><p className='text-gray900 text-sm font-light'>EOA</p></div>
              <div className='md:block hidden w-[100px]'><p className='text-gray900 text-sm font-light'>Multichain</p></div>
              <div>
              <div className="flex items-center">
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 md:px-[30px] pl-[6px] pr-[7px] md:w-auto w-[30px] rounded text-white text-[10px] md:h-auto h-[30px] md:border-transparent border-primaryBlue border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                    <span className='md:hidden block mr-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17.235" height="12.613" viewBox="0 0 17.235 12.613">
                        <g id="Group_1931" data-name="Group 1931" transform="translate(-546 -190.41)">
                          <path id="Path_86" data-name="Path 86" d="M16.275,80.045a9.322,9.322,0,0,1-8.4-5.35,2.249,2.249,0,0,1,0-1.913,9.276,9.276,0,0,1,16.808,0,2.248,2.248,0,0,1,0,1.914A9.32,9.32,0,0,1,16.275,80.045Zm0-10.917A7.619,7.619,0,0,0,9.406,73.5a.558.558,0,0,0,0,.474,7.579,7.579,0,0,0,13.736,0,.554.554,0,0,0,0-.473A7.62,7.62,0,0,0,16.275,69.128Z" transform="translate(538.343 122.978)" fill="#fff"/>
                          <path id="Path_87" data-name="Path 87" d="M18.448,78.966a4.036,4.036,0,1,1,4.036-4.036A4.04,4.04,0,0,1,18.448,78.966Zm0-6.376a2.34,2.34,0,1,0,2.34,2.34A2.342,2.342,0,0,0,18.448,72.59Z" transform="translate(536.17 121.864)" fill="#fff"/>
                        </g>
                      </svg>
                    </span>
                    <span className='md:block hidden'>View</span>
                  </button>
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center border-gray900 py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[10px]  md:h-auto h-[30px] border-transparent border hover:border-gray900 hover:text-white hover:bg-gray900 duration-300 edit-icon'>
                    <span  className='md:hidden block'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12.876" height="12.875" viewBox="0 0 12.876 12.875">
                        <g id="Group_1941" data-name="Group 1941" transform="translate(-39.429 -66.581)">
                          <path id="Path_97" data-name="Path 97" d="M49.378,79.456H42.355a2.93,2.93,0,0,1-2.926-2.926V69.507a2.93,2.93,0,0,1,2.926-2.926h5.12a.793.793,0,0,1,0,1.586h-5.12a1.342,1.342,0,0,0-1.34,1.34V76.53a1.342,1.342,0,0,0,1.34,1.34h7.023a1.343,1.343,0,0,0,1.341-1.34V71.41a.793.793,0,0,1,1.586,0v5.12A2.93,2.93,0,0,1,49.378,79.456Z" fill="#333"/>
                          <g id="Group_1940" data-name="Group 1940" transform="translate(44.129 66.683)">
                            <path id="Path_98" data-name="Path 98" d="M47.053,78.643l1.21-.3-1.116-1.116-.3,1.21A.173.173,0,0,0,47.053,78.643Z" transform="translate(-46.838 -70.574)" fill="#333"/>
                            <path id="Path_99" data-name="Path 99" d="M58.009,68.441l.346-.346a.793.793,0,0,0,0-1.121h0a.792.792,0,0,0-1.122,0l-.345.345Z" transform="translate(-50.513 -66.741)" fill="#333"/>
                            <rect id="Rectangle_2196" data-name="Rectangle 2196" width="7.323" height="1.586" transform="translate(0.749 6.204) rotate(-45)" fill="#333"/>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className='md:block hidden'>Edit</span>
                  </button>
                  <button className='wallet-btn flex items-center border-[#FF0000] border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[#FF0000] text-[10px]  md:h-auto h-[30px] hover:border-[#FF0000] hover:text-white hover:bg-[#FF0000] duration-300 delet-icon'>
                    <span  className='md:hidden block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.608" height="14.633" viewBox="0 0 12.608 14.633">
                      <g id="Group_1935" data-name="Group 1935" transform="translate(-48.545 -65.265)">
                        <g id="Group_1927" data-name="Group 1927" transform="translate(48.545 65.265)">
                          <path id="Path_90" data-name="Path 90" d="M79.029,71.359H70.655a.847.847,0,0,0-.845.912l.678,8.8a.848.848,0,0,0,.845.783h7.018a.848.848,0,0,0,.845-.783l.678-8.8a.847.847,0,0,0-.845-.912Zm-1.463,8.8H72.118l-.547-7.108h6.543Z" transform="translate(-68.539 -67.225)" fill="#fa141b"/>
                          <path id="Path_91" data-name="Path 91" d="M78.7,80.54h.044a.847.847,0,0,0,.846-.8l.227-4.378a.848.848,0,1,0-1.693-.087L77.9,79.65A.847.847,0,0,0,78.7,80.54Z" transform="translate(-71.141 -68.226)" fill="#fa141b"/>
                          <path id="Path_92" data-name="Path 92" d="M74.8,80.542h.044a.847.847,0,0,0,.8-.89l-.227-4.378a.856.856,0,0,0-.89-.8.847.847,0,0,0-.8.89l.227,4.378A.847.847,0,0,0,74.8,80.542Z" transform="translate(-69.801 -68.226)" fill="#fa141b"/>
                          <path id="Path_93" data-name="Path 93" d="M79.7,67.309H76.806v-.222a1.825,1.825,0,0,0-1.823-1.822H73.5a1.824,1.824,0,0,0-1.822,1.822v.222H68.785a.848.848,0,1,0,0,1.7H79.7a.848.848,0,0,0,0-1.7Zm-6.325,0v-.222a.127.127,0,0,1,.126-.126h1.485a.127.127,0,0,1,.127.126v.222Z" transform="translate(-67.937 -65.265)" fill="#fa141b"/>
                        </g>
                      </g>
                    </svg>
                    </span>
                    <span className='md:block hidden'>Delete</span>
                  </button>
                </div>
              </div>
            </div>
            <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
              <div className='sm:w-[370px] w-[120px]'><p className='text-gray900 text-sm'>0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8</p></div>
              <div className='md:block hidden w-[88px]'><p className='text-gray900 text-sm font-light'>EOA</p></div>
              <div className='md:block hidden w-[100px]'><p className='text-gray900 text-sm font-light'>Multichain</p></div>
              <div>
              <div className="flex items-center">
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 md:px-[30px] pl-[6px] pr-[7px] md:w-auto w-[30px] rounded text-white text-[10px] md:h-auto h-[30px] md:border-transparent border-primaryBlue border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                    <span className='md:hidden block mr-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17.235" height="12.613" viewBox="0 0 17.235 12.613">
                        <g id="Group_1931" data-name="Group 1931" transform="translate(-546 -190.41)">
                          <path id="Path_86" data-name="Path 86" d="M16.275,80.045a9.322,9.322,0,0,1-8.4-5.35,2.249,2.249,0,0,1,0-1.913,9.276,9.276,0,0,1,16.808,0,2.248,2.248,0,0,1,0,1.914A9.32,9.32,0,0,1,16.275,80.045Zm0-10.917A7.619,7.619,0,0,0,9.406,73.5a.558.558,0,0,0,0,.474,7.579,7.579,0,0,0,13.736,0,.554.554,0,0,0,0-.473A7.62,7.62,0,0,0,16.275,69.128Z" transform="translate(538.343 122.978)" fill="#fff"/>
                          <path id="Path_87" data-name="Path 87" d="M18.448,78.966a4.036,4.036,0,1,1,4.036-4.036A4.04,4.04,0,0,1,18.448,78.966Zm0-6.376a2.34,2.34,0,1,0,2.34,2.34A2.342,2.342,0,0,0,18.448,72.59Z" transform="translate(536.17 121.864)" fill="#fff"/>
                        </g>
                      </svg>
                    </span>
                    <span className='md:block hidden'>View</span>
                  </button>
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center border-gray900 py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[10px]  md:h-auto h-[30px] border-transparent border hover:border-gray900 hover:text-white hover:bg-gray900 duration-300 edit-icon'>
                    <span  className='md:hidden block'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12.876" height="12.875" viewBox="0 0 12.876 12.875">
                        <g id="Group_1941" data-name="Group 1941" transform="translate(-39.429 -66.581)">
                          <path id="Path_97" data-name="Path 97" d="M49.378,79.456H42.355a2.93,2.93,0,0,1-2.926-2.926V69.507a2.93,2.93,0,0,1,2.926-2.926h5.12a.793.793,0,0,1,0,1.586h-5.12a1.342,1.342,0,0,0-1.34,1.34V76.53a1.342,1.342,0,0,0,1.34,1.34h7.023a1.343,1.343,0,0,0,1.341-1.34V71.41a.793.793,0,0,1,1.586,0v5.12A2.93,2.93,0,0,1,49.378,79.456Z" fill="#333"/>
                          <g id="Group_1940" data-name="Group 1940" transform="translate(44.129 66.683)">
                            <path id="Path_98" data-name="Path 98" d="M47.053,78.643l1.21-.3-1.116-1.116-.3,1.21A.173.173,0,0,0,47.053,78.643Z" transform="translate(-46.838 -70.574)" fill="#333"/>
                            <path id="Path_99" data-name="Path 99" d="M58.009,68.441l.346-.346a.793.793,0,0,0,0-1.121h0a.792.792,0,0,0-1.122,0l-.345.345Z" transform="translate(-50.513 -66.741)" fill="#333"/>
                            <rect id="Rectangle_2196" data-name="Rectangle 2196" width="7.323" height="1.586" transform="translate(0.749 6.204) rotate(-45)" fill="#333"/>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className='md:block hidden'>Edit</span>
                  </button>
                  <button className='wallet-btn flex items-center border-[#FF0000] border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[#FF0000] text-[10px]  md:h-auto h-[30px] hover:border-[#FF0000] hover:text-white hover:bg-[#FF0000] duration-300 delet-icon'>
                    <span  className='md:hidden block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.608" height="14.633" viewBox="0 0 12.608 14.633">
                      <g id="Group_1935" data-name="Group 1935" transform="translate(-48.545 -65.265)">
                        <g id="Group_1927" data-name="Group 1927" transform="translate(48.545 65.265)">
                          <path id="Path_90" data-name="Path 90" d="M79.029,71.359H70.655a.847.847,0,0,0-.845.912l.678,8.8a.848.848,0,0,0,.845.783h7.018a.848.848,0,0,0,.845-.783l.678-8.8a.847.847,0,0,0-.845-.912Zm-1.463,8.8H72.118l-.547-7.108h6.543Z" transform="translate(-68.539 -67.225)" fill="#fa141b"/>
                          <path id="Path_91" data-name="Path 91" d="M78.7,80.54h.044a.847.847,0,0,0,.846-.8l.227-4.378a.848.848,0,1,0-1.693-.087L77.9,79.65A.847.847,0,0,0,78.7,80.54Z" transform="translate(-71.141 -68.226)" fill="#fa141b"/>
                          <path id="Path_92" data-name="Path 92" d="M74.8,80.542h.044a.847.847,0,0,0,.8-.89l-.227-4.378a.856.856,0,0,0-.89-.8.847.847,0,0,0-.8.89l.227,4.378A.847.847,0,0,0,74.8,80.542Z" transform="translate(-69.801 -68.226)" fill="#fa141b"/>
                          <path id="Path_93" data-name="Path 93" d="M79.7,67.309H76.806v-.222a1.825,1.825,0,0,0-1.823-1.822H73.5a1.824,1.824,0,0,0-1.822,1.822v.222H68.785a.848.848,0,1,0,0,1.7H79.7a.848.848,0,0,0,0-1.7Zm-6.325,0v-.222a.127.127,0,0,1,.126-.126h1.485a.127.127,0,0,1,.127.126v.222Z" transform="translate(-67.937 -65.265)" fill="#fa141b"/>
                        </g>
                      </g>
                    </svg>
                    </span>
                    <span className='md:block hidden'>Delete</span>
                  </button>
                </div>
              </div>
            </div>
            <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
              <div className='sm:w-[370px] w-[120px]'><p className='text-gray900 text-sm'>0x6d2e03b7EfFEae98BD302A9F836D0d6Ab0002766</p></div>
              <div className='md:block hidden w-[88px]'><p className='text-gray900 text-sm font-light flex items-center'>Multisig <span className='ml-3'><Image src={Lock} alt="" /></span></p></div>
              <div className='md:block hidden w-[100px]'><p className='text-gray900 text-sm font-light'>Polygon</p></div>
              <div>
              <div className="flex items-center">
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 md:px-[30px] pl-[6px] pr-[7px] md:w-auto w-[30px] rounded text-white text-[10px] md:h-auto h-[30px] md:border-transparent border-primaryBlue border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                    <span className='md:hidden block mr-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17.235" height="12.613" viewBox="0 0 17.235 12.613">
                        <g id="Group_1931" data-name="Group 1931" transform="translate(-546 -190.41)">
                          <path id="Path_86" data-name="Path 86" d="M16.275,80.045a9.322,9.322,0,0,1-8.4-5.35,2.249,2.249,0,0,1,0-1.913,9.276,9.276,0,0,1,16.808,0,2.248,2.248,0,0,1,0,1.914A9.32,9.32,0,0,1,16.275,80.045Zm0-10.917A7.619,7.619,0,0,0,9.406,73.5a.558.558,0,0,0,0,.474,7.579,7.579,0,0,0,13.736,0,.554.554,0,0,0,0-.473A7.62,7.62,0,0,0,16.275,69.128Z" transform="translate(538.343 122.978)" fill="#fff"/>
                          <path id="Path_87" data-name="Path 87" d="M18.448,78.966a4.036,4.036,0,1,1,4.036-4.036A4.04,4.04,0,0,1,18.448,78.966Zm0-6.376a2.34,2.34,0,1,0,2.34,2.34A2.342,2.342,0,0,0,18.448,72.59Z" transform="translate(536.17 121.864)" fill="#fff"/>
                        </g>
                      </svg>
                    </span>
                    <span className='md:block hidden'>View</span>
                  </button>
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center border-gray900 py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[10px]  md:h-auto h-[30px] border-transparent border hover:border-gray900 hover:text-white hover:bg-gray900 duration-300 edit-icon'>
                    <span  className='md:hidden block'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12.876" height="12.875" viewBox="0 0 12.876 12.875">
                        <g id="Group_1941" data-name="Group 1941" transform="translate(-39.429 -66.581)">
                          <path id="Path_97" data-name="Path 97" d="M49.378,79.456H42.355a2.93,2.93,0,0,1-2.926-2.926V69.507a2.93,2.93,0,0,1,2.926-2.926h5.12a.793.793,0,0,1,0,1.586h-5.12a1.342,1.342,0,0,0-1.34,1.34V76.53a1.342,1.342,0,0,0,1.34,1.34h7.023a1.343,1.343,0,0,0,1.341-1.34V71.41a.793.793,0,0,1,1.586,0v5.12A2.93,2.93,0,0,1,49.378,79.456Z" fill="#333"/>
                          <g id="Group_1940" data-name="Group 1940" transform="translate(44.129 66.683)">
                            <path id="Path_98" data-name="Path 98" d="M47.053,78.643l1.21-.3-1.116-1.116-.3,1.21A.173.173,0,0,0,47.053,78.643Z" transform="translate(-46.838 -70.574)" fill="#333"/>
                            <path id="Path_99" data-name="Path 99" d="M58.009,68.441l.346-.346a.793.793,0,0,0,0-1.121h0a.792.792,0,0,0-1.122,0l-.345.345Z" transform="translate(-50.513 -66.741)" fill="#333"/>
                            <rect id="Rectangle_2196" data-name="Rectangle 2196" width="7.323" height="1.586" transform="translate(0.749 6.204) rotate(-45)" fill="#333"/>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className='md:block hidden'>Edit</span>
                  </button>
                  <button className='wallet-btn flex items-center border-[#FF0000] border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[#FF0000] text-[10px]  md:h-auto h-[30px] hover:border-[#FF0000] hover:text-white hover:bg-[#FF0000] duration-300 delet-icon'>
                    <span  className='md:hidden block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.608" height="14.633" viewBox="0 0 12.608 14.633">
                      <g id="Group_1935" data-name="Group 1935" transform="translate(-48.545 -65.265)">
                        <g id="Group_1927" data-name="Group 1927" transform="translate(48.545 65.265)">
                          <path id="Path_90" data-name="Path 90" d="M79.029,71.359H70.655a.847.847,0,0,0-.845.912l.678,8.8a.848.848,0,0,0,.845.783h7.018a.848.848,0,0,0,.845-.783l.678-8.8a.847.847,0,0,0-.845-.912Zm-1.463,8.8H72.118l-.547-7.108h6.543Z" transform="translate(-68.539 -67.225)" fill="#fa141b"/>
                          <path id="Path_91" data-name="Path 91" d="M78.7,80.54h.044a.847.847,0,0,0,.846-.8l.227-4.378a.848.848,0,1,0-1.693-.087L77.9,79.65A.847.847,0,0,0,78.7,80.54Z" transform="translate(-71.141 -68.226)" fill="#fa141b"/>
                          <path id="Path_92" data-name="Path 92" d="M74.8,80.542h.044a.847.847,0,0,0,.8-.89l-.227-4.378a.856.856,0,0,0-.89-.8.847.847,0,0,0-.8.89l.227,4.378A.847.847,0,0,0,74.8,80.542Z" transform="translate(-69.801 -68.226)" fill="#fa141b"/>
                          <path id="Path_93" data-name="Path 93" d="M79.7,67.309H76.806v-.222a1.825,1.825,0,0,0-1.823-1.822H73.5a1.824,1.824,0,0,0-1.822,1.822v.222H68.785a.848.848,0,1,0,0,1.7H79.7a.848.848,0,0,0,0-1.7Zm-6.325,0v-.222a.127.127,0,0,1,.126-.126h1.485a.127.127,0,0,1,.127.126v.222Z" transform="translate(-67.937 -65.265)" fill="#fa141b"/>
                        </g>
                      </g>
                    </svg>
                    </span>
                    <span className='md:block hidden'>Delete</span>
                  </button>
                </div>
              </div>
            </div>
            <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
              <div className='sm:w-[370px] w-[120px]'><p className='text-gray900 text-sm'>0xaaBAd1670BB8540b5869D3223EB83Ae7608c182D</p></div>
              <div className='md:block hidden w-[88px]'><p className='text-gray900 text-sm font-light'>EOA</p></div>
              <div className='md:block hidden w-[100px]'><p className='text-gray900 text-sm font-light'>Multichain</p></div>
              <div>
              <div className="flex items-center">
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 md:px-[30px] pl-[6px] pr-[7px] md:w-auto w-[30px] rounded text-white text-[10px] md:h-auto h-[30px] md:border-transparent border-primaryBlue border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                    <span className='md:hidden block mr-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17.235" height="12.613" viewBox="0 0 17.235 12.613">
                        <g id="Group_1931" data-name="Group 1931" transform="translate(-546 -190.41)">
                          <path id="Path_86" data-name="Path 86" d="M16.275,80.045a9.322,9.322,0,0,1-8.4-5.35,2.249,2.249,0,0,1,0-1.913,9.276,9.276,0,0,1,16.808,0,2.248,2.248,0,0,1,0,1.914A9.32,9.32,0,0,1,16.275,80.045Zm0-10.917A7.619,7.619,0,0,0,9.406,73.5a.558.558,0,0,0,0,.474,7.579,7.579,0,0,0,13.736,0,.554.554,0,0,0,0-.473A7.62,7.62,0,0,0,16.275,69.128Z" transform="translate(538.343 122.978)" fill="#fff"/>
                          <path id="Path_87" data-name="Path 87" d="M18.448,78.966a4.036,4.036,0,1,1,4.036-4.036A4.04,4.04,0,0,1,18.448,78.966Zm0-6.376a2.34,2.34,0,1,0,2.34,2.34A2.342,2.342,0,0,0,18.448,72.59Z" transform="translate(536.17 121.864)" fill="#fff"/>
                        </g>
                      </svg>
                    </span>
                    <span className='md:block hidden'>View</span>
                  </button>
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center border-gray900 py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[10px]  md:h-auto h-[30px] border-transparent border hover:border-gray900 hover:text-white hover:bg-gray900 duration-300 edit-icon'>
                    <span  className='md:hidden block'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12.876" height="12.875" viewBox="0 0 12.876 12.875">
                        <g id="Group_1941" data-name="Group 1941" transform="translate(-39.429 -66.581)">
                          <path id="Path_97" data-name="Path 97" d="M49.378,79.456H42.355a2.93,2.93,0,0,1-2.926-2.926V69.507a2.93,2.93,0,0,1,2.926-2.926h5.12a.793.793,0,0,1,0,1.586h-5.12a1.342,1.342,0,0,0-1.34,1.34V76.53a1.342,1.342,0,0,0,1.34,1.34h7.023a1.343,1.343,0,0,0,1.341-1.34V71.41a.793.793,0,0,1,1.586,0v5.12A2.93,2.93,0,0,1,49.378,79.456Z" fill="#333"/>
                          <g id="Group_1940" data-name="Group 1940" transform="translate(44.129 66.683)">
                            <path id="Path_98" data-name="Path 98" d="M47.053,78.643l1.21-.3-1.116-1.116-.3,1.21A.173.173,0,0,0,47.053,78.643Z" transform="translate(-46.838 -70.574)" fill="#333"/>
                            <path id="Path_99" data-name="Path 99" d="M58.009,68.441l.346-.346a.793.793,0,0,0,0-1.121h0a.792.792,0,0,0-1.122,0l-.345.345Z" transform="translate(-50.513 -66.741)" fill="#333"/>
                            <rect id="Rectangle_2196" data-name="Rectangle 2196" width="7.323" height="1.586" transform="translate(0.749 6.204) rotate(-45)" fill="#333"/>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className='md:block hidden'>Edit</span>
                  </button>
                  <button className='wallet-btn flex items-center border-[#FF0000] border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[#FF0000] text-[10px]  md:h-auto h-[30px] hover:border-[#FF0000] hover:text-white hover:bg-[#FF0000] duration-300 delet-icon'>
                    <span  className='md:hidden block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.608" height="14.633" viewBox="0 0 12.608 14.633">
                      <g id="Group_1935" data-name="Group 1935" transform="translate(-48.545 -65.265)">
                        <g id="Group_1927" data-name="Group 1927" transform="translate(48.545 65.265)">
                          <path id="Path_90" data-name="Path 90" d="M79.029,71.359H70.655a.847.847,0,0,0-.845.912l.678,8.8a.848.848,0,0,0,.845.783h7.018a.848.848,0,0,0,.845-.783l.678-8.8a.847.847,0,0,0-.845-.912Zm-1.463,8.8H72.118l-.547-7.108h6.543Z" transform="translate(-68.539 -67.225)" fill="#fa141b"/>
                          <path id="Path_91" data-name="Path 91" d="M78.7,80.54h.044a.847.847,0,0,0,.846-.8l.227-4.378a.848.848,0,1,0-1.693-.087L77.9,79.65A.847.847,0,0,0,78.7,80.54Z" transform="translate(-71.141 -68.226)" fill="#fa141b"/>
                          <path id="Path_92" data-name="Path 92" d="M74.8,80.542h.044a.847.847,0,0,0,.8-.89l-.227-4.378a.856.856,0,0,0-.89-.8.847.847,0,0,0-.8.89l.227,4.378A.847.847,0,0,0,74.8,80.542Z" transform="translate(-69.801 -68.226)" fill="#fa141b"/>
                          <path id="Path_93" data-name="Path 93" d="M79.7,67.309H76.806v-.222a1.825,1.825,0,0,0-1.823-1.822H73.5a1.824,1.824,0,0,0-1.822,1.822v.222H68.785a.848.848,0,1,0,0,1.7H79.7a.848.848,0,0,0,0-1.7Zm-6.325,0v-.222a.127.127,0,0,1,.126-.126h1.485a.127.127,0,0,1,.127.126v.222Z" transform="translate(-67.937 -65.265)" fill="#fa141b"/>
                        </g>
                      </g>
                    </svg>
                    </span>
                    <span className='md:block hidden'>Delete</span>
                  </button>
                </div>
              </div>
            </div>
            <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
              <div className='sm:w-[370px] w-[120px]'><p className='text-gray900 text-sm'>0x36363dd904136808E88ea604c33f7EA4e073d80e</p></div>
              <div className='md:block hidden w-[88px]'><p className='text-gray900 text-sm font-light flex items-center'>Multisig <span className='ml-3'><Image src={Lock} alt="" /></span></p></div>
              <div className='md:block hidden w-[100px]'><p className='text-gray900 text-sm font-light'>Arbidivum</p></div>
              <div>
              <div className="flex items-center">
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 md:px-[30px] pl-[6px] pr-[7px] md:w-auto w-[30px] rounded text-white text-[10px] md:h-auto h-[30px] md:border-transparent border-primaryBlue border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                    <span className='md:hidden block mr-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17.235" height="12.613" viewBox="0 0 17.235 12.613">
                        <g id="Group_1931" data-name="Group 1931" transform="translate(-546 -190.41)">
                          <path id="Path_86" data-name="Path 86" d="M16.275,80.045a9.322,9.322,0,0,1-8.4-5.35,2.249,2.249,0,0,1,0-1.913,9.276,9.276,0,0,1,16.808,0,2.248,2.248,0,0,1,0,1.914A9.32,9.32,0,0,1,16.275,80.045Zm0-10.917A7.619,7.619,0,0,0,9.406,73.5a.558.558,0,0,0,0,.474,7.579,7.579,0,0,0,13.736,0,.554.554,0,0,0,0-.473A7.62,7.62,0,0,0,16.275,69.128Z" transform="translate(538.343 122.978)" fill="#fff"/>
                          <path id="Path_87" data-name="Path 87" d="M18.448,78.966a4.036,4.036,0,1,1,4.036-4.036A4.04,4.04,0,0,1,18.448,78.966Zm0-6.376a2.34,2.34,0,1,0,2.34,2.34A2.342,2.342,0,0,0,18.448,72.59Z" transform="translate(536.17 121.864)" fill="#fff"/>
                        </g>
                      </svg>
                    </span>
                    <span className='md:block hidden'>View</span>
                  </button>
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center border-gray900 py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[10px]  md:h-auto h-[30px] border-transparent border hover:border-gray900 hover:text-white hover:bg-gray900 duration-300 edit-icon'>
                    <span  className='md:hidden block'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12.876" height="12.875" viewBox="0 0 12.876 12.875">
                        <g id="Group_1941" data-name="Group 1941" transform="translate(-39.429 -66.581)">
                          <path id="Path_97" data-name="Path 97" d="M49.378,79.456H42.355a2.93,2.93,0,0,1-2.926-2.926V69.507a2.93,2.93,0,0,1,2.926-2.926h5.12a.793.793,0,0,1,0,1.586h-5.12a1.342,1.342,0,0,0-1.34,1.34V76.53a1.342,1.342,0,0,0,1.34,1.34h7.023a1.343,1.343,0,0,0,1.341-1.34V71.41a.793.793,0,0,1,1.586,0v5.12A2.93,2.93,0,0,1,49.378,79.456Z" fill="#333"/>
                          <g id="Group_1940" data-name="Group 1940" transform="translate(44.129 66.683)">
                            <path id="Path_98" data-name="Path 98" d="M47.053,78.643l1.21-.3-1.116-1.116-.3,1.21A.173.173,0,0,0,47.053,78.643Z" transform="translate(-46.838 -70.574)" fill="#333"/>
                            <path id="Path_99" data-name="Path 99" d="M58.009,68.441l.346-.346a.793.793,0,0,0,0-1.121h0a.792.792,0,0,0-1.122,0l-.345.345Z" transform="translate(-50.513 -66.741)" fill="#333"/>
                            <rect id="Rectangle_2196" data-name="Rectangle 2196" width="7.323" height="1.586" transform="translate(0.749 6.204) rotate(-45)" fill="#333"/>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className='md:block hidden'>Edit</span>
                  </button>
                  <button className='wallet-btn flex items-center border-[#FF0000] border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[#FF0000] text-[10px]  md:h-auto h-[30px] hover:border-[#FF0000] hover:text-white hover:bg-[#FF0000] duration-300 delet-icon'>
                    <span  className='md:hidden block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.608" height="14.633" viewBox="0 0 12.608 14.633">
                      <g id="Group_1935" data-name="Group 1935" transform="translate(-48.545 -65.265)">
                        <g id="Group_1927" data-name="Group 1927" transform="translate(48.545 65.265)">
                          <path id="Path_90" data-name="Path 90" d="M79.029,71.359H70.655a.847.847,0,0,0-.845.912l.678,8.8a.848.848,0,0,0,.845.783h7.018a.848.848,0,0,0,.845-.783l.678-8.8a.847.847,0,0,0-.845-.912Zm-1.463,8.8H72.118l-.547-7.108h6.543Z" transform="translate(-68.539 -67.225)" fill="#fa141b"/>
                          <path id="Path_91" data-name="Path 91" d="M78.7,80.54h.044a.847.847,0,0,0,.846-.8l.227-4.378a.848.848,0,1,0-1.693-.087L77.9,79.65A.847.847,0,0,0,78.7,80.54Z" transform="translate(-71.141 -68.226)" fill="#fa141b"/>
                          <path id="Path_92" data-name="Path 92" d="M74.8,80.542h.044a.847.847,0,0,0,.8-.89l-.227-4.378a.856.856,0,0,0-.89-.8.847.847,0,0,0-.8.89l.227,4.378A.847.847,0,0,0,74.8,80.542Z" transform="translate(-69.801 -68.226)" fill="#fa141b"/>
                          <path id="Path_93" data-name="Path 93" d="M79.7,67.309H76.806v-.222a1.825,1.825,0,0,0-1.823-1.822H73.5a1.824,1.824,0,0,0-1.822,1.822v.222H68.785a.848.848,0,1,0,0,1.7H79.7a.848.848,0,0,0,0-1.7Zm-6.325,0v-.222a.127.127,0,0,1,.126-.126h1.485a.127.127,0,0,1,.127.126v.222Z" transform="translate(-67.937 -65.265)" fill="#fa141b"/>
                        </g>
                      </g>
                    </svg>
                    </span>
                    <span className='md:block hidden'>Delete</span>
                  </button>
                </div>
              </div>
            </div>
            <div className='inline-flex w-full justify-between items-center  md:py-[25px] py-5 border-b border-white100'> 
              <div className='sm:w-[370px] w-[120px]'><p className='text-gray900 text-sm'>0x36363dd904136808E88ea604c33f7EA4e073d80e</p></div>
              <div className='md:block hidden w-[88px]'><p className='text-gray900 text-sm font-light'>EOA</p></div>
              <div className='md:block hidden w-[100px]'><p className='text-gray900 text-sm font-light'>Arbidivum</p></div>
              <div>
              <div className="flex items-center">
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 md:px-[30px] pl-[6px] pr-[7px] md:w-auto w-[30px] rounded text-white text-[10px] md:h-auto h-[30px] md:border-transparent border-primaryBlue border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                    <span className='md:hidden block mr-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17.235" height="12.613" viewBox="0 0 17.235 12.613">
                        <g id="Group_1931" data-name="Group 1931" transform="translate(-546 -190.41)">
                          <path id="Path_86" data-name="Path 86" d="M16.275,80.045a9.322,9.322,0,0,1-8.4-5.35,2.249,2.249,0,0,1,0-1.913,9.276,9.276,0,0,1,16.808,0,2.248,2.248,0,0,1,0,1.914A9.32,9.32,0,0,1,16.275,80.045Zm0-10.917A7.619,7.619,0,0,0,9.406,73.5a.558.558,0,0,0,0,.474,7.579,7.579,0,0,0,13.736,0,.554.554,0,0,0,0-.473A7.62,7.62,0,0,0,16.275,69.128Z" transform="translate(538.343 122.978)" fill="#fff"/>
                          <path id="Path_87" data-name="Path 87" d="M18.448,78.966a4.036,4.036,0,1,1,4.036-4.036A4.04,4.04,0,0,1,18.448,78.966Zm0-6.376a2.34,2.34,0,1,0,2.34,2.34A2.342,2.342,0,0,0,18.448,72.59Z" transform="translate(536.17 121.864)" fill="#fff"/>
                        </g>
                      </svg>
                    </span>
                    <span className='md:block hidden'>View</span>
                  </button>
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center border-gray900 py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[10px]  md:h-auto h-[30px] border-transparent border hover:border-gray900 hover:text-white hover:bg-gray900 duration-300 edit-icon'>
                    <span  className='md:hidden block'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12.876" height="12.875" viewBox="0 0 12.876 12.875">
                        <g id="Group_1941" data-name="Group 1941" transform="translate(-39.429 -66.581)">
                          <path id="Path_97" data-name="Path 97" d="M49.378,79.456H42.355a2.93,2.93,0,0,1-2.926-2.926V69.507a2.93,2.93,0,0,1,2.926-2.926h5.12a.793.793,0,0,1,0,1.586h-5.12a1.342,1.342,0,0,0-1.34,1.34V76.53a1.342,1.342,0,0,0,1.34,1.34h7.023a1.343,1.343,0,0,0,1.341-1.34V71.41a.793.793,0,0,1,1.586,0v5.12A2.93,2.93,0,0,1,49.378,79.456Z" fill="#333"/>
                          <g id="Group_1940" data-name="Group 1940" transform="translate(44.129 66.683)">
                            <path id="Path_98" data-name="Path 98" d="M47.053,78.643l1.21-.3-1.116-1.116-.3,1.21A.173.173,0,0,0,47.053,78.643Z" transform="translate(-46.838 -70.574)" fill="#333"/>
                            <path id="Path_99" data-name="Path 99" d="M58.009,68.441l.346-.346a.793.793,0,0,0,0-1.121h0a.792.792,0,0,0-1.122,0l-.345.345Z" transform="translate(-50.513 -66.741)" fill="#333"/>
                            <rect id="Rectangle_2196" data-name="Rectangle 2196" width="7.323" height="1.586" transform="translate(0.749 6.204) rotate(-45)" fill="#333"/>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className='md:block hidden'>Edit</span>
                  </button>
                  <button className='wallet-btn flex items-center border-[#FF0000] border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[#FF0000] text-[10px]  md:h-auto h-[30px] hover:border-[#FF0000] hover:text-white hover:bg-[#FF0000] duration-300 delet-icon'>
                    <span  className='md:hidden block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.608" height="14.633" viewBox="0 0 12.608 14.633">
                      <g id="Group_1935" data-name="Group 1935" transform="translate(-48.545 -65.265)">
                        <g id="Group_1927" data-name="Group 1927" transform="translate(48.545 65.265)">
                          <path id="Path_90" data-name="Path 90" d="M79.029,71.359H70.655a.847.847,0,0,0-.845.912l.678,8.8a.848.848,0,0,0,.845.783h7.018a.848.848,0,0,0,.845-.783l.678-8.8a.847.847,0,0,0-.845-.912Zm-1.463,8.8H72.118l-.547-7.108h6.543Z" transform="translate(-68.539 -67.225)" fill="#fa141b"/>
                          <path id="Path_91" data-name="Path 91" d="M78.7,80.54h.044a.847.847,0,0,0,.846-.8l.227-4.378a.848.848,0,1,0-1.693-.087L77.9,79.65A.847.847,0,0,0,78.7,80.54Z" transform="translate(-71.141 -68.226)" fill="#fa141b"/>
                          <path id="Path_92" data-name="Path 92" d="M74.8,80.542h.044a.847.847,0,0,0,.8-.89l-.227-4.378a.856.856,0,0,0-.89-.8.847.847,0,0,0-.8.89l.227,4.378A.847.847,0,0,0,74.8,80.542Z" transform="translate(-69.801 -68.226)" fill="#fa141b"/>
                          <path id="Path_93" data-name="Path 93" d="M79.7,67.309H76.806v-.222a1.825,1.825,0,0,0-1.823-1.822H73.5a1.824,1.824,0,0,0-1.822,1.822v.222H68.785a.848.848,0,1,0,0,1.7H79.7a.848.848,0,0,0,0-1.7Zm-6.325,0v-.222a.127.127,0,0,1,.126-.126h1.485a.127.127,0,0,1,.127.126v.222Z" transform="translate(-67.937 -65.265)" fill="#fa141b"/>
                        </g>
                      </g>
                    </svg>
                    </span>
                    <span className='md:block hidden'>Delete</span>
                  </button>
                </div>
              </div>
            </div>
            <div className='inline-flex w-full justify-between pt-[25px]'> 
              <div className='sm:w-[370px] w-[120px]'><p className='text-gray900 text-sm'>0x690B9A9E9aa1C9dB991C7721a92d351Db4FaC990</p></div>
              <div className='md:block hidden w-[88px]'><p className='text-gray900 text-sm font-light'>EOA</p></div>
              <div className='md:block hidden w-[100px]'><p className='text-gray900 text-sm font-light'>Multichain</p></div>
              <div>
              <div className="flex items-center">
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center bg-primaryBlue py-2 md:px-[30px] pl-[6px] pr-[7px] md:w-auto w-[30px] rounded text-white text-[10px] md:h-auto h-[30px] md:border-transparent border-primaryBlue border hover:border-primaryBlue hover:text-primaryBlue hover:bg-white plus-icon duration-300'>
                    <span className='md:hidden block mr-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17.235" height="12.613" viewBox="0 0 17.235 12.613">
                        <g id="Group_1931" data-name="Group 1931" transform="translate(-546 -190.41)">
                          <path id="Path_86" data-name="Path 86" d="M16.275,80.045a9.322,9.322,0,0,1-8.4-5.35,2.249,2.249,0,0,1,0-1.913,9.276,9.276,0,0,1,16.808,0,2.248,2.248,0,0,1,0,1.914A9.32,9.32,0,0,1,16.275,80.045Zm0-10.917A7.619,7.619,0,0,0,9.406,73.5a.558.558,0,0,0,0,.474,7.579,7.579,0,0,0,13.736,0,.554.554,0,0,0,0-.473A7.62,7.62,0,0,0,16.275,69.128Z" transform="translate(538.343 122.978)" fill="#fff"/>
                          <path id="Path_87" data-name="Path 87" d="M18.448,78.966a4.036,4.036,0,1,1,4.036-4.036A4.04,4.04,0,0,1,18.448,78.966Zm0-6.376a2.34,2.34,0,1,0,2.34,2.34A2.342,2.342,0,0,0,18.448,72.59Z" transform="translate(536.17 121.864)" fill="#fff"/>
                        </g>
                      </svg>
                    </span>
                    <span className='md:block hidden'>View</span>
                  </button>
                  <button className='wallet-btn sm:mr-[14px] mr-1 flex items-center border-gray900 py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[10px]  md:h-auto h-[30px] border-transparent border hover:border-gray900 hover:text-white hover:bg-gray900 duration-300 edit-icon'>
                    <span  className='md:hidden block'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12.876" height="12.875" viewBox="0 0 12.876 12.875">
                        <g id="Group_1941" data-name="Group 1941" transform="translate(-39.429 -66.581)">
                          <path id="Path_97" data-name="Path 97" d="M49.378,79.456H42.355a2.93,2.93,0,0,1-2.926-2.926V69.507a2.93,2.93,0,0,1,2.926-2.926h5.12a.793.793,0,0,1,0,1.586h-5.12a1.342,1.342,0,0,0-1.34,1.34V76.53a1.342,1.342,0,0,0,1.34,1.34h7.023a1.343,1.343,0,0,0,1.341-1.34V71.41a.793.793,0,0,1,1.586,0v5.12A2.93,2.93,0,0,1,49.378,79.456Z" fill="#333"/>
                          <g id="Group_1940" data-name="Group 1940" transform="translate(44.129 66.683)">
                            <path id="Path_98" data-name="Path 98" d="M47.053,78.643l1.21-.3-1.116-1.116-.3,1.21A.173.173,0,0,0,47.053,78.643Z" transform="translate(-46.838 -70.574)" fill="#333"/>
                            <path id="Path_99" data-name="Path 99" d="M58.009,68.441l.346-.346a.793.793,0,0,0,0-1.121h0a.792.792,0,0,0-1.122,0l-.345.345Z" transform="translate(-50.513 -66.741)" fill="#333"/>
                            <rect id="Rectangle_2196" data-name="Rectangle 2196" width="7.323" height="1.586" transform="translate(0.749 6.204) rotate(-45)" fill="#333"/>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className='md:block hidden'>Edit</span>
                  </button>
                  <button className='wallet-btn flex items-center border-[#FF0000] border py-2 md:px-[30px] px-[7px] md:w-auto w-[30px] rounded text-[#FF0000] text-[10px]  md:h-auto h-[30px] hover:border-[#FF0000] hover:text-white hover:bg-[#FF0000] duration-300 delet-icon'>
                    <span  className='md:hidden block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.608" height="14.633" viewBox="0 0 12.608 14.633">
                      <g id="Group_1935" data-name="Group 1935" transform="translate(-48.545 -65.265)">
                        <g id="Group_1927" data-name="Group 1927" transform="translate(48.545 65.265)">
                          <path id="Path_90" data-name="Path 90" d="M79.029,71.359H70.655a.847.847,0,0,0-.845.912l.678,8.8a.848.848,0,0,0,.845.783h7.018a.848.848,0,0,0,.845-.783l.678-8.8a.847.847,0,0,0-.845-.912Zm-1.463,8.8H72.118l-.547-7.108h6.543Z" transform="translate(-68.539 -67.225)" fill="#fa141b"/>
                          <path id="Path_91" data-name="Path 91" d="M78.7,80.54h.044a.847.847,0,0,0,.846-.8l.227-4.378a.848.848,0,1,0-1.693-.087L77.9,79.65A.847.847,0,0,0,78.7,80.54Z" transform="translate(-71.141 -68.226)" fill="#fa141b"/>
                          <path id="Path_92" data-name="Path 92" d="M74.8,80.542h.044a.847.847,0,0,0,.8-.89l-.227-4.378a.856.856,0,0,0-.89-.8.847.847,0,0,0-.8.89l.227,4.378A.847.847,0,0,0,74.8,80.542Z" transform="translate(-69.801 -68.226)" fill="#fa141b"/>
                          <path id="Path_93" data-name="Path 93" d="M79.7,67.309H76.806v-.222a1.825,1.825,0,0,0-1.823-1.822H73.5a1.824,1.824,0,0,0-1.822,1.822v.222H68.785a.848.848,0,1,0,0,1.7H79.7a.848.848,0,0,0,0-1.7Zm-6.325,0v-.222a.127.127,0,0,1,.126-.126h1.485a.127.127,0,0,1,.127.126v.222Z" transform="translate(-67.937 -65.265)" fill="#fa141b"/>
                        </g>
                      </g>
                    </svg>
                    </span>
                    <span className='md:block hidden'>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div> 
        </div>
    </div>  

  )
}

export default Wallets