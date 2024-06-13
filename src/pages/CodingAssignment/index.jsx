import React from "react";

import { Button, Img, List, Text } from "components";

const CodingAssignmentPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-raleway items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <header className="bg-white_A700 flex h-[72px] md:h-auto items-center justify-center px-20 md:px-5 py-6 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[851px] items-center justify-between w-auto md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-16 items-center justify-center w-auto sm:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="bg-clip-text bg-gradient1  text-center text-transparent tracking-[1.14px]"
                  as="h3"
                  variant="h3"
                >
                  EDYODA
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-center justify-start w-auto">
                <Text
                  className="font-medium text-black_900 text-center w-auto"
                  variant="body2"
                >
                  Courses
                </Text>
                <Img
                  src="images/img_arrowdown.svg"
                  className="h-6 w-6"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-3 items-center justify-start w-auto">
                <Text
                  className="font-medium text-black_900 text-center w-auto"
                  variant="body2"
                >
                  Programs
                </Text>
                <Img
                  src="images/img_arrowdown.svg"
                  className="h-6 w-6"
                  alt="arrowdown_One"
                />
              </div>
            </div>
            <div className="flex flex-row gap-16 items-center justify-center w-auto">
              <Img
                src="images/img_search.svg"
                className="h-6 w-6"
                alt="search"
              />
              <div className="flex flex-col items-center justify-center w-auto">
                <a
                  href="javascript:"
                  className="font-medium text-black_900 text-center w-auto"
                >
                  <Text variant="body2">Log in</Text>
                </a>
              </div>
              <Button
                className="cursor-pointer font-bold h-10 leading-[normal] min-w-[166px] text-base text-center text-white_A700 uppercase"
                shape="CircleBorder20"
                size="sm"
                variant="GradientIndigoA700LightblueA700"
              >
                join now
              </Button>
            </div>
          </div>
        </header>
        <div className="bg-blue_gray_900 sm:h-[1006px] h-[1008px] md:h-[1176px] pt-0.5 md:px-5 relative w-full">
          <Img
            src="images/img_background.png"
            className="h-[1006px] m-auto object-cover w-full"
            alt="background"
          />
          <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-[0] items-start justify-center m-auto w-[88%]">
            <div className="flex flex-col gap-12 items-start justify-start relative w-auto md:w-full">
              <div className="flex flex-col gap-2 h-[149px] md:h-auto items-start justify-between w-auto md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="relative right-[150px] text-white_A700 tracking-[-0.56px] w-[800px]"
                    as="h2"
                    variant="h2"
                  >
                    Access curated courses worth
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row font-roboto gap-4 items-end justify-start relative right-[150px] w-full">
                  <div className="relative w-[31%] md:w-full">
                    <Text
                      className="m-auto text-white_A700 tracking-[-0.64px] w-auto"
                      as="h1"
                      variant="h1"
                    >
                      ₹ 18,500
                    </Text>
                    <div className="absolute bg-red_A700 h-2 right-[25px] text-red_A700 top-[34px] w-[170px]"></div>
                  </div>
                  <div className="flex flex-col font-raleway items-end justify-center w-auto">
                    <Text
                      className="text-white_A700 tracking-[-0.56px] w-auto"
                      as="h2"
                      variant="h2"
                    >
                      at just
                    </Text>
                  </div>
                  <div className="flex flex-col font-roboto items-end justify-center w-auto">
                    <Text
                      className="text-light_blue_A700 tracking-[-0.64px] w-auto"
                      as="h1"
                      variant="h1"
                    >
                      ₹ 99
                    </Text>
                  </div>
                  <div className="flex flex-col font-raleway items-end justify-center w-auto">
                    <Text
                      className="text-white_A700 tracking-[-0.56px] w-auto"
                      as="h2"
                      variant="h2"
                    >
                      per year!
                    </Text>
                  </div>
                </div>
              </div>
              <List
                className="flex-col gap-11 grid items-center relative right-[150px] w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 gap-16 h-[68px] md:h-auto items-center justify-start w-full">
                  <Img
                    src="images/img_computer.svg"
                    className="h-[68px] w-[68px]"
                    alt="computer"
                  />
                  <div className="flex sm:flex-1 flex-col items-center justify-center w-auto sm:w-full">
                    <Text
                      className="font-medium font-roboto text-light_blue_A700 tracking-[0.96px] w-auto"
                      as="h4"
                      variant="h4"
                    >
                      <span className="md:text-3xl sm:text-[28px] text-light_blue_A700 text-[32px] font-roboto text-left font-semibold">
                        100+{" "}
                      </span>
                      <span className="md:text-3xl sm:text-[28px] text-white_A700 text-[32px] font-roboto text-left font-normal">
                        Job relevant courses
                      </span>
                      <span className="md:text-3xl sm:text-[28px] text-white_A700 text-[32px] font-roboto text-left font-semibold">
                        {" "}
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row font-roboto sm:gap-10 gap-16 h-[68px] md:h-auto items-center justify-start w-full">
                  <Img
                    src="images/img_clock.svg"
                    className="h-[68px] w-[68px]"
                    alt="clock"
                  />
                  <div className="flex sm:flex-1 flex-col items-center justify-center w-auto sm:w-full">
                    <Text
                      className="font-semibold text-light_blue_A700 tracking-[0.96px] w-auto"
                      as="h4"
                      variant="h4"
                    >
                      <span className="md:text-3xl sm:text-[28px] text-light_blue_A700 text-[32px] font-roboto text-left">
                        20,000+{" "}
                      </span>
                      <span className="md:text-3xl sm:text-[28px] text-white_A700 text-[32px] font-roboto text-left font-normal">
                        Hours of content
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row font-nunito sm:gap-10 gap-16 h-[68px] md:h-auto items-center justify-start w-full">
                  <div className="flex flex-col h-[68px] md:h-auto items-center justify-center p-2.5 w-[68px]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[58px] items-center justify-end p-[7px] w-[58px]"
                      style={{
                        backgroundImage: "url('images/img_group16.svg')",
                      }}
                    >
                      <Text
                        className="mt-3 text-white_A700 tracking-[0.66px]"
                        as="h6"
                        variant="h6"
                      >
                        live
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-1 flex-col font-roboto items-center justify-center w-auto sm:w-full">
                    <Text
                      className="font-semibold text-light_blue_A700 tracking-[0.96px] w-auto"
                      as="h4"
                      variant="h4"
                    >
                      <span className="md:text-3xl sm:text-[28px] text-light_blue_A700 text-[32px] font-roboto text-left">
                        Exclusive{" "}
                      </span>
                      <span className="md:text-3xl sm:text-[28px] text-white_A700 text-[32px] font-roboto text-left font-normal">
                        webinar access
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row font-roboto sm:gap-10 gap-16 h-[68px] md:h-auto items-center justify-start w-full">
                  <Img
                    src="images/img_location.svg"
                    className="h-[68px] w-[68px]"
                    alt="location"
                  />
                  <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-center justify-center w-auto sm:w-full">
                      <Text
                        className="font-semibold text-light_blue_A700 tracking-[0.96px] w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Scholarship worth ₹94,500
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex sm:flex-col flex-row font-nunito sm:gap-10 gap-16 h-[68px] md:h-auto items-center justify-start relative right-[150px] w-full">
                <div className="flex flex-col h-[68px] md:h-auto items-center justify-center p-3 w-[68px]">
                  <div className="bg-white_A700 md:h-[42px] h-[57px] p-1.5 relative rounded-[28px] w-[57px]">
                    <Text
                      className="absolute h-max inset-[0] justify-center m-auto text-white_A700 tracking-[0.54px] w-max"
                      variant="body1"
                    >
                      ADS
                    </Text>
                    <Img
                      src="images/img_checkmark.svg"
                      className="absolute h-[42px] inset-[0] justify-center m-auto rounded-[16px] w-[42px]"
                      alt="checkmark"
                    />
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-col font-roboto items-center justify-center w-auto sm:w-full">
                  <Text
                    className="font-semibold text-light_blue_A700 tracking-[0.96px] w-auto"
                    as="h4"
                    variant="h4"
                  >
                    <span className="md:text-3xl sm:text-[28px] text-light_blue_A700 text-[32px] font-roboto text-left">
                      Ad Free{" "}
                    </span>
                    <span className="md:text-3xl sm:text-[28px] text-white_A700 text-[32px] font-roboto text-left font-normal">
                      learning experience
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col font-roboto gap-7 items-center justify-start sm:px-5 px-6 py-8 relative right-[-200px] rounded-lg w-[549px] sm:w-full">
              <div className="flex flex-row gap-40 items-center justify-center w-full">
                <div className="flex flex-1 flex-col gap-1 items-center justify-center w-full">
                  <Text
                    className="bg-light_blue_A700 flex font-semibold h-[38px] items-center justify-center rounded-[50%] text-center text-white_A700 tracking-[-0.36px] w-[38px]"
                    as="h5"
                    variant="h5"
                  >
                    1
                  </Text>
                  <a
                    href="javascript:"
                    className="font-normal text-blue_gray_800 text-center tracking-[-0.16px] w-auto"
                  >
                    <Text variant="body2">Sign Up</Text>
                  </a>
                </div>
                <div className="flex flex-1 flex-col gap-1 items-center justify-center w-full">
                  <Text
                    className="bg-light_blue_A700 flex font-semibold h-[38px] items-center justify-center rounded-[50%] text-center text-white_A700 tracking-[-0.36px] w-[38px]"
                    as="h5"
                    variant="h5"
                  >
                    2
                  </Text>
                  <Text
                    className="font-normal text-blue_gray_800 text-center tracking-[-0.16px] w-auto"
                    variant="body2"
                  >
                    Subscribe
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <Text
                  className="font-semibold text-blue_gray_800 text-center w-full"
                  as="h5"
                  variant="h5"
                >
                  Select your subcription plan
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <List
                  className="flex-col gap-4 grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-gray_300 flex flex-1 sm:flex-col flex-row gap-3 items-center justify-start outline outline-[2px] outline-gray_400 p-4 rounded w-full">
                    <Img
                      src="images/img_radiobutton.svg"
                      className="h-8 w-8"
                      alt="radiobutton"
                    />
                    <div className="relative w-[91%] sm:w-full">
                      <div className="flex flex-row items-center justify-between mt-auto mx-auto w-full">
                        <Text
                          className="font-semibold text-center text-gray_400 w-auto"
                          variant="body2"
                        >
                          12 Months Subscription{" "}
                        </Text>
                        <div className="flex flex-col items-end justify-center w-auto">
                          <div className="flex flex-row gap-2 items-end justify-start w-auto">
                            <Text
                              className="font-semibold text-center text-gray_400 w-[27px]"
                              variant="body4"
                            >
                              Total
                            </Text>
                            <Text
                              className="font-semibold text-center text-gray_400 w-auto"
                              variant="body2"
                            >
                              ₹99
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-end justify-center w-auto">
                            <Text
                              className="font-normal text-center text-gray_400 w-auto"
                              variant="body4"
                            >
                              ₹8
                            </Text>
                            <Text
                              className="text-center text-gray_400 w-[19px]"
                              variant="body5"
                            >
                              /mo
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="absolute bg-red_300 font-medium justify-center left-[0] rounded-bl rounded-br text-center text-white_A700 top-[0] w-auto"
                        variant="body4"
                      >
                        Offer expired
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_300_01 flex flex-1 sm:flex-col flex-row gap-3 items-center justify-start outline outline-[1px] outline-green_500 p-4 rounded w-full">
                    <Img
                      src="images/img_radiobutton_green_500.svg"
                      className="h-8 w-8"
                      alt="radiobutton"
                    />
                    <div className="relative w-[91%] sm:w-full">
                      <div className="flex flex-row items-center justify-between mt-auto mx-auto w-full">
                        <Text
                          className="font-semibold text-blue_gray_800 text-center w-auto"
                          variant="body2"
                        >
                          12 Months Subscription{" "}
                        </Text>
                        <div className="flex flex-col items-end justify-start w-auto">
                          <div className="flex flex-row gap-2 items-end justify-start w-auto">
                            <Text
                              className="font-normal text-blue_gray_800 text-center w-[27px]"
                              variant="body4"
                            >
                              Total
                            </Text>
                            <Text
                              className="font-semibold text-blue_gray_800 text-center w-auto"
                              variant="body2"
                            >
                              ₹179
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-end justify-center w-auto">
                            <Text
                              className="font-normal text-blue_gray_800 text-center w-auto"
                              variant="body4"
                            >
                              ₹15
                            </Text>
                            <Text
                              className="text-center text-gray_400 w-[19px]"
                              variant="body5"
                            >
                              /mo
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="absolute bg-green_500 font-medium justify-center left-[0] rounded-bl rounded-br text-center text-white_A700 top-[0] w-auto"
                        variant="body4"
                      >
                        Recommended
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 sm:flex-col flex-row gap-3 items-center justify-start outline outline-[1px] outline-gray_400 p-4 rounded w-full">
                    <Img
                      src="images/img_radiobutton_gray_400.svg"
                      className="h-8 w-8"
                      alt="radiobutton"
                    />
                    <div className="flex flex-1 flex-row items-center justify-between w-full">
                      <Text
                        className="font-semibold text-blue_gray_800 text-center w-auto"
                        variant="body2"
                      >
                        6 Months Subscription{" "}
                      </Text>
                      <div className="flex flex-col items-end justify-start w-auto">
                        <div className="flex flex-row gap-2 items-end justify-start w-auto">
                          <Text
                            className="font-normal text-blue_gray_800 text-center w-[27px]"
                            variant="body4"
                          >
                            Total
                          </Text>
                          <Text
                            className="font-semibold text-blue_gray_800 text-center w-auto"
                            variant="body2"
                          >
                            ₹149
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-end justify-center w-auto">
                          <Text
                            className="font-normal text-blue_gray_800 text-center w-auto"
                            variant="body4"
                          >
                            ₹25
                          </Text>
                          <Text
                            className="text-center text-gray_400 w-[19px]"
                            variant="body5"
                          >
                            /mo
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 sm:flex-col flex-row gap-3 items-center justify-start outline outline-[1px] outline-gray_400 p-4 rounded w-full">
                    <Img
                      src="images/img_radiobutton_gray_400.svg"
                      className="h-8 w-8"
                      alt="radiobutton"
                    />
                    <div className="flex flex-1 flex-row items-center justify-between w-full">
                      <Text
                        className="font-semibold text-blue_gray_800 text-center w-auto"
                        variant="body2"
                      >
                        3 Months Subscription{" "}
                      </Text>
                      <div className="flex flex-col items-end justify-start w-auto">
                        <div className="flex flex-row gap-2 items-end justify-start w-auto">
                          <Text
                            className="font-normal text-blue_gray_800 text-center w-[27px]"
                            variant="body4"
                          >
                            Total
                          </Text>
                          <Text
                            className="font-semibold text-blue_gray_800 text-center w-auto"
                            variant="body2"
                          >
                            ₹99
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-end justify-center w-auto">
                          <Text
                            className="font-normal text-blue_gray_800 text-center w-auto"
                            variant="body4"
                          >
                            ₹33
                          </Text>
                          <Text
                            className="text-center text-gray_400 w-[19px]"
                            variant="body5"
                          >
                            /mo
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="bg-white_A700 flex flex-col gap-3 items-center justify-center outline outline-gray_400 sm:px-5 px-6 py-4 w-full">
                <div className="flex flex-row gap-3 h-6 md:h-auto items-center justify-between w-full">
                  <Text
                    className="font-normal text-blue_gray_800 text-center w-auto"
                    variant="body2"
                  >
                    Subscription Fee
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_800 text-center tracking-[0.48px] w-auto"
                    variant="body2"
                  >
                    ₹18,500
                  </Text>
                </div>
                <div className="bg-gradient3  p-0.5 rounded-lg w-full ">
                  <div className="bg-gradient2  bg-white_A700 border-solid flex flex-col gap-1 items-start justify-start sm:px-5 px-6 py-3 rounded-lg sm:w-full">
                    <div className="flex flex-row gap-3 h-6 md:h-auto items-center justify-between w-full">
                      <Text
                        className="font-semibold text-center text-deep_orange_800 w-auto"
                        variant="body2"
                      >
                        Limited time offer
                      </Text>
                      <Text
                        className="font-semibold text-blue_gray_800 text-center tracking-[0.48px] w-auto"
                        variant="body2"
                      >
                        - ₹18,401
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        src="images/img_iconclock.svg"
                        className="h-6 w-6"
                        alt="iconclock"
                      />
                      <Text
                        className="text-center text-deep_orange_800 w-auto"
                        variant="body3"
                      >
                        Offer valid till 25th March 2023{" "}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-3 h-[29px] md:h-auto items-center justify-between w-full">
                  <Text
                    className="font-semibold text-blue_gray_800 text-center w-auto"
                    variant="body2"
                  >
                    <span className="text-blue_gray_800 text-base font-roboto">
                      Total{" "}
                    </span>
                    <span className="text-blue_gray_800 text-base font-roboto font-normal">
                      (Incl. of 18% GST)
                    </span>
                  </Text>
                  <Text
                    className="font-bold text-blue_gray_800 text-center tracking-[0.72px] w-auto"
                    as="h5"
                    variant="h5"
                  >
                    ₹149
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-center w-full">
                <Button
                  className="cursor-pointer flex-1 font-bold h-14 leading-[normal] text-base text-center text-red_300 uppercase w-full"
                  shape="RoundedBorder4"
                  size="md"
                  variant="OutlineRed300"
                >
                  cancel
                </Button>
                <Button
                  className="cursor-pointer flex-1 font-bold h-14 leading-[normal] text-base text-center text-white_A700 uppercase w-full"
                  shape="RoundedBorder4"
                  size="md"
                  variant="FillGreen500"
                >
                  proceed to pay
                </Button>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-[24%]">
                  <Img
                    src="images/img_frame12537.png"
                    className="h-[42px] md:h-auto object-cover w-full"
                    alt="frame12537"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodingAssignmentPage;
