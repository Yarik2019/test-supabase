<template>
  <div class="hello">
   <div class="form-bg-img">
     <div class="form-bg-img-blur">
       <div class="form-center">
         <div class="container">
           <form action="" @submit.prevent="LogIn">
             <div class="form-title">
               <img src="../assets/svg/logo.svg" alt="">
               <h2><span>Sing up</span> and find the best place to rest while traveling </h2>
             </div>
             <div class="row form-row">
               <div class="col-md form-col-one">
                   <div class="form-one">
                     <div>
                       <svg style='display: none;'>
                         <symbol id='pipel' viewBox="0 0 32 32">
                           <g>
                             <path d="M13.71 11.7096C14.6904 10.9383 15.406 9.88056 15.7572 8.68358C16.1085 7.4866 16.0779 6.2099 15.6698 5.0311C15.2617 3.85231 14.4963 2.83003 13.4801 2.10649C12.4639 1.38296 11.2474 0.994141 10 0.994141C8.75255 0.994141 7.53611 1.38296 6.51993 2.10649C5.50374 2.83003 4.73834 3.85231 4.33021 5.0311C3.92208 6.2099 3.89151 7.4866 4.24276 8.68358C4.59401 9.88056 5.3096 10.9383 6.29 11.7096C4.61007 12.3827 3.14428 13.499 2.04889 14.9396C0.953495 16.3801 0.26956 18.0909 0.0699967 19.8896C0.0555513 20.021 0.0671132 20.1538 0.104022 20.2807C0.140931 20.4075 0.202464 20.5259 0.285108 20.629C0.452016 20.8371 0.69478 20.9705 0.959997 20.9996C1.22521 21.0288 1.49116 20.9514 1.69932 20.7845C1.90749 20.6176 2.04082 20.3749 2.07 20.1096C2.28958 18.1548 3.22168 16.3494 4.68822 15.0384C6.15475 13.7274 8.0529 13.0027 10.02 13.0027C11.9871 13.0027 13.8852 13.7274 15.3518 15.0384C16.8183 16.3494 17.7504 18.1548 17.97 20.1096C17.9972 20.3554 18.1144 20.5823 18.2991 20.7467C18.4838 20.911 18.7228 21.0011 18.97 20.9996H19.08C19.3421 20.9695 19.5817 20.8369 19.7466 20.6309C19.9114 20.4248 19.9881 20.162 19.96 19.8996C19.7595 18.0958 19.0719 16.3806 17.9708 14.9378C16.8698 13.4951 15.3969 12.3791 13.71 11.7096ZM10 10.9996C9.20887 10.9996 8.43551 10.765 7.77772 10.3255C7.11992 9.88599 6.60723 9.26128 6.30448 8.53037C6.00173 7.79947 5.92251 6.9952 6.07686 6.21928C6.2312 5.44335 6.61216 4.73062 7.17157 4.17121C7.73098 3.6118 8.44371 3.23084 9.21964 3.0765C9.99556 2.92215 10.7998 3.00137 11.5307 3.30412C12.2616 3.60687 12.8863 4.11956 13.3259 4.77736C13.7654 5.43515 14 6.20851 14 6.99964C14 8.0605 13.5786 9.07792 12.8284 9.82806C12.0783 10.5782 11.0609 10.9996 10 10.9996Z" fill="#67D9B7"/>
                           </g>
                         </symbol>
                       </svg>
                       <div class="form-input-wrapper ">

                         <input type="text" id="input-pipel" class="form-input-control" placeholder="First Name" v-model="FirstName">
                         <label class="form-input-label"  for="input-pipel">First Name </label>
                         <svg class='form-input-icon'>
                           <use xlink:href='#pipel'></use>
                         </svg>
                       </div>
                     </div>
                     <div>
                       <svg style='display: none;'>
                         <symbol id='country' viewBox="0 0 32 32">
                           <g>
                             <path d="M17.4599 8.63031C17.3195 7.16922 16.8031 5.76939 15.9611 4.56713C15.119 3.36486 13.98 2.40114 12.6549 1.7698C11.3298 1.13846 9.86376 0.861029 8.3996 0.964512C6.93543 1.068 5.52301 1.54887 4.29988 2.36031C3.24908 3.06295 2.36693 3.98961 1.71682 5.0737C1.06672 6.15779 0.664776 7.37241 0.539881 8.63031C0.417363 9.87997 0.574555 11.1412 1.00005 12.3226C1.42555 13.5039 2.10868 14.5758 2.99988 15.4603L8.29988 20.7703C8.39284 20.864 8.50344 20.9384 8.6253 20.9892C8.74716 21.04 8.87787 21.0661 9.00988 21.0661C9.14189 21.0661 9.2726 21.04 9.39446 20.9892C9.51632 20.9384 9.62692 20.864 9.71988 20.7703L14.9999 15.4603C15.8911 14.5758 16.5742 13.5039 16.9997 12.3226C17.4252 11.1412 17.5824 9.87997 17.4599 8.63031ZM13.5999 14.0503L8.99988 18.6503L4.39988 14.0503C3.72197 13.3724 3.20268 12.5526 2.87935 11.6501C2.55601 10.7475 2.43667 9.7845 2.52988 8.83031C2.6237 7.86141 2.93164 6.92547 3.43145 6.09015C3.93126 5.25483 4.61044 4.54102 5.41988 4.00031C6.48083 3.29554 7.72619 2.9196 8.99988 2.9196C10.2736 2.9196 11.5189 3.29554 12.5799 4.00031C13.3869 4.53893 14.0646 5.24959 14.5642 6.08125C15.0639 6.9129 15.3732 7.84491 15.4699 8.81031C15.5661 9.76774 15.4483 10.7346 15.1249 11.6409C14.8014 12.5471 14.2805 13.3701 13.5999 14.0503ZM8.99988 5.00031C8.10986 5.00031 7.23984 5.26423 6.49982 5.7587C5.75979 6.25316 5.18302 6.95597 4.84242 7.77823C4.50183 8.6005 4.41271 9.5053 4.58635 10.3782C4.75998 11.2511 5.18856 12.053 5.8179 12.6823C6.44724 13.3116 7.24906 13.7402 8.12197 13.9138C8.99489 14.0875 9.89969 13.9984 10.722 13.6578C11.5442 13.3172 12.247 12.7404 12.7415 12.0004C13.236 11.2604 13.4999 10.3903 13.4999 9.50031C13.4972 8.30765 13.0223 7.16459 12.1789 6.32125C11.3356 5.4779 10.1925 5.00295 8.99988 5.00031ZM8.99988 12.0003C8.50543 12.0003 8.02208 11.8537 7.61096 11.579C7.19983 11.3043 6.8794 10.9138 6.69018 10.457C6.50096 10.0002 6.45145 9.49754 6.54792 9.01258C6.64438 8.52763 6.88248 8.08217 7.23211 7.73254C7.58175 7.38291 8.0272 7.14481 8.51215 7.04835C8.99711 6.95188 9.49977 7.00139 9.95659 7.19061C10.4134 7.37983 10.8039 7.70026 11.0786 8.11138C11.3533 8.52251 11.4999 9.00586 11.4999 9.50031C11.4999 10.1634 11.2365 10.7992 10.7676 11.2681C10.2988 11.7369 9.66292 12.0003 8.99988 12.0003Z" fill="#67D9B7"/>
                           </g>
                         </symbol>
                       </svg>

                       <div class="form-input-wrapper" >
                              <div  :class="OptionsWith ? 'form-input-arrow-active' : 'form-input-arrow' " @click="OptionsWith =! OptionsWith"></div>

                        <div class="form-input-control ">
                          <p>{{selected}}</p>
                          <transition name="fade">
                          <ul class="form-input-select" v-if="OptionsWith">
                            <li :value="op.value" class="form-input-select-options" v-for="op in options" :key="op.name" @click="optionSelect(op)">
                               {{op.name}}
                            </li>
                          </ul>
                          </transition>


                        </div>

                         <svg class='form-input-icon'>
                           <use xlink:href='#country'></use>
                         </svg>
                       </div>

                     </div>
                     <div>
                       <svg style='display: none;'>
                         <symbol id='lock' viewBox="0 0 32 32">
                           <g>
                             <path d="M8 11C7.69555 10.9964 7.39732 11.0862 7.14544 11.2573C6.89357 11.4284 6.70015 11.6725 6.59121 11.9568C6.48228 12.2411 6.46306 12.552 6.53615 12.8476C6.60923 13.1431 6.77111 13.4092 7 13.61V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V13.61C9.22889 13.4092 9.39077 13.1431 9.46385 12.8476C9.53694 12.552 9.51772 12.2411 9.40879 11.9568C9.29985 11.6725 9.10643 11.4284 8.85456 11.2573C8.60268 11.0862 8.30445 10.9964 8 11ZM13 7V5C13 3.67392 12.4732 2.40215 11.5355 1.46447C10.5979 0.526784 9.32608 0 8 0C6.67392 0 5.40215 0.526784 4.46447 1.46447C3.52678 2.40215 3 3.67392 3 5V7C2.20435 7 1.44129 7.31607 0.87868 7.87868C0.316071 8.44129 0 9.20435 0 10V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V10C16 9.20435 15.6839 8.44129 15.1213 7.87868C14.5587 7.31607 13.7956 7 13 7ZM5 5C5 4.20435 5.31607 3.44129 5.87868 2.87868C6.44129 2.31607 7.20435 2 8 2C8.79565 2 9.55871 2.31607 10.1213 2.87868C10.6839 3.44129 11 4.20435 11 5V7H5V5ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9H13C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10V17Z" fill="#67D9B7"/>

                           </g>
                         </symbol>
                       </svg>
                       <div class="form-input-wrapper">
                         <input type="password" class="form-input-control" id="password" placeholder="Password" v-model="Password">
                         <label class="form-input-label"  for="password">Password</label>
                         <svg class='form-input-icon'>
                           <use xlink:href='#lock'></use>
                         </svg>
                       </div>
                     </div>
                     <div>
                       <svg style='display: none;'>
                         <symbol id='message' viewBox="0 0 32 32">
                           <g>
                             <path d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H10H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM16.59 2L10.71 7.88C10.617 7.97373 10.5064 8.04812 10.3846 8.09889C10.2627 8.14966 10.132 8.1758 10 8.1758C9.86799 8.1758 9.73728 8.14966 9.61542 8.09889C9.49356 8.04812 9.38296 7.97373 9.29 7.88L3.41 2H16.59ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V3.41L7.88 9.29C8.4425 9.8518 9.205 10.1674 10 10.1674C10.795 10.1674 11.5575 9.8518 12.12 9.29L18 3.41V13Z" fill="#67D9B7"/>                           </g>
                         </symbol>
                       </svg>
                       <div class="form-input-wrapper ">
                         <input type="email" class="form-input-control" id="email" placeholder="Email" v-model="Email">
                         <label class="form-input-label"  for="email">Email</label>
                         <svg class='form-input-icon'>
                           <use xlink:href='#message'></use>
                         </svg>
                       </div>
                     </div>

                   </div>

               </div>
               <div class="col-md">
                 <div class="form-two">
                  <div>
                    <svg style='display: none;'>
                      <symbol id='pipels' viewBox="0 0 32 32">
                        <g>
                          <path d="M11.3 9.22C11.8336 8.75813 12.2616 8.18688 12.5549 7.54502C12.8482 6.90316 13 6.20571 13 5.5C13 4.17392 12.4732 2.90215 11.5355 1.96447C10.5979 1.02678 9.32608 0.5 8 0.5C6.67392 0.5 5.40215 1.02678 4.46447 1.96447C3.52678 2.90215 3 4.17392 3 5.5C2.99999 6.20571 3.1518 6.90316 3.44513 7.54502C3.73845 8.18688 4.16642 8.75813 4.7 9.22C3.30014 9.85388 2.11247 10.8775 1.27898 12.1685C0.445495 13.4596 0.00147185 14.9633 0 16.5C0 16.7652 0.105357 17.0196 0.292893 17.2071C0.48043 17.3946 0.734784 17.5 1 17.5C1.26522 17.5 1.51957 17.3946 1.70711 17.2071C1.89464 17.0196 2 16.7652 2 16.5C2 14.9087 2.63214 13.3826 3.75736 12.2574C4.88258 11.1321 6.4087 10.5 8 10.5C9.5913 10.5 11.1174 11.1321 12.2426 12.2574C13.3679 13.3826 14 14.9087 14 16.5C14 16.7652 14.1054 17.0196 14.2929 17.2071C14.4804 17.3946 14.7348 17.5 15 17.5C15.2652 17.5 15.5196 17.3946 15.7071 17.2071C15.8946 17.0196 16 16.7652 16 16.5C15.9985 14.9633 15.5545 13.4596 14.721 12.1685C13.8875 10.8775 12.6999 9.85388 11.3 9.22ZM8 8.5C7.40666 8.5 6.82664 8.32405 6.33329 7.99441C5.83994 7.66476 5.45542 7.19623 5.22836 6.64805C5.0013 6.09987 4.94189 5.49667 5.05764 4.91473C5.1734 4.33279 5.45912 3.79824 5.87868 3.37868C6.29824 2.95912 6.83279 2.6734 7.41473 2.55764C7.99667 2.44189 8.59987 2.5013 9.14805 2.72836C9.69623 2.95542 10.1648 3.33994 10.4944 3.83329C10.8241 4.32664 11 4.90666 11 5.5C11 6.29565 10.6839 7.05871 10.1213 7.62132C9.55871 8.18393 8.79565 8.5 8 8.5ZM17.74 8.82C18.38 8.09933 18.798 7.20905 18.9438 6.25634C19.0896 5.30362 18.9569 4.32907 18.5618 3.45C18.1666 2.57093 17.5258 1.8248 16.7165 1.30142C15.9071 0.77805 14.9638 0.499742 14 0.5C13.7348 0.5 13.4804 0.605357 13.2929 0.792893C13.1054 0.98043 13 1.23478 13 1.5C13 1.76522 13.1054 2.01957 13.2929 2.20711C13.4804 2.39464 13.7348 2.5 14 2.5C14.7956 2.5 15.5587 2.81607 16.1213 3.37868C16.6839 3.94129 17 4.70435 17 5.5C16.9986 6.02524 16.8593 6.5409 16.5961 6.99542C16.3328 7.44994 15.9549 7.82738 15.5 8.09C15.3517 8.17552 15.2279 8.29766 15.1404 8.44474C15.0528 8.59182 15.0045 8.7589 15 8.93C14.9958 9.09976 15.0349 9.2678 15.1137 9.41826C15.1924 9.56872 15.3081 9.69665 15.45 9.79L15.84 10.05L15.97 10.12C17.1754 10.6917 18.1923 11.596 18.901 12.7263C19.6096 13.8566 19.9805 15.1659 19.97 16.5C19.97 16.7652 20.0754 17.0196 20.2629 17.2071C20.4504 17.3946 20.7048 17.5 20.97 17.5C21.2352 17.5 21.4896 17.3946 21.6771 17.2071C21.8646 17.0196 21.97 16.7652 21.97 16.5C21.9782 14.9654 21.5938 13.4543 20.8535 12.1101C20.1131 10.7659 19.0413 9.63331 17.74 8.82Z" fill="#67D9B7"/>
                        </g>
                      </symbol>
                    </svg>
                    <div class="form-input-wrapper">
                      <input type="text" class="form-input-control" id="Second-Name" placeholder="Second Name" v-model="SecondName">
                      <label class="form-input-label"  for="Second-Name">Second Name</label>
                      <svg class='form-input-icon'>
                        <use xlink:href='#pipels'></use>
                      </svg>
                    </div>
                  </div>
                   <div>
                     <svg style='display: none;'>
                       <symbol id='mobile' viewBox="0 0 32 32">
                         <g>
                           <path d="M18.4401 10.9994C18.2201 10.9994 17.9901 10.9294 17.7701 10.8794C17.3246 10.7812 16.8868 10.6509 16.4601 10.4894C15.9962 10.3206 15.4862 10.3294 15.0284 10.514C14.5706 10.6986 14.1972 11.046 13.9801 11.4894L13.7601 11.9394C12.7861 11.3976 11.8911 10.7246 11.1001 9.93938C10.3149 9.1484 9.64192 8.25338 9.1001 7.27938L9.5201 6.99938C9.96347 6.7823 10.3109 6.40891 10.4955 5.95107C10.6801 5.49323 10.6889 4.98329 10.5201 4.51938C10.3613 4.0918 10.231 3.65418 10.1301 3.20938C10.0801 2.98938 10.0401 2.75938 10.0101 2.52938C9.88867 1.825 9.51973 1.18712 8.96972 0.730619C8.41972 0.274117 7.7248 0.0289887 7.0101 0.0393798H4.0101C3.57913 0.0353333 3.15235 0.124193 2.75881 0.29991C2.36527 0.475627 2.01421 0.734076 1.72953 1.05766C1.44485 1.38125 1.23324 1.76237 1.10909 2.17509C0.984942 2.58781 0.95118 3.02244 1.0101 3.44938C1.54284 7.63876 3.45613 11.5313 6.44775 14.512C9.43938 17.4928 13.3388 19.3919 17.5301 19.9094H17.9101C18.6475 19.9105 19.3595 19.6399 19.9101 19.1494C20.2265 18.8664 20.4792 18.5196 20.6516 18.1317C20.8239 17.7438 20.9121 17.3238 20.9101 16.8994V13.8994C20.8979 13.2048 20.6449 12.5359 20.1944 12.007C19.744 11.4782 19.1239 11.122 18.4401 10.9994ZM18.9401 16.9994C18.9399 17.1414 18.9095 17.2817 18.8509 17.411C18.7923 17.5403 18.7068 17.6557 18.6001 17.7494C18.4884 17.8459 18.3577 17.9179 18.2165 17.961C18.0753 18.004 17.9267 18.0171 17.7801 17.9994C14.035 17.5192 10.5563 15.8059 7.89282 13.1297C5.2293 10.4535 3.53251 6.96672 3.0701 3.21938C3.05419 3.0729 3.06813 2.92471 3.1111 2.78377C3.15407 2.64283 3.22517 2.51207 3.3201 2.39938C3.41381 2.29271 3.52916 2.20722 3.65848 2.1486C3.7878 2.08997 3.92812 2.05956 4.0701 2.05938H7.0701C7.30265 2.05421 7.52972 2.13026 7.71224 2.27445C7.89476 2.41864 8.02131 2.62195 8.0701 2.84938C8.1101 3.12271 8.1601 3.39271 8.2201 3.65938C8.33562 4.18652 8.48936 4.70456 8.6801 5.20938L7.2801 5.85938C7.1604 5.9143 7.05272 5.99233 6.96326 6.08898C6.87379 6.18562 6.8043 6.29899 6.75877 6.42257C6.71324 6.54615 6.69257 6.67751 6.69795 6.8091C6.70332 6.94069 6.73464 7.06992 6.7901 7.18938C8.2293 10.2721 10.7073 12.7502 13.7901 14.1894C14.0336 14.2894 14.3066 14.2894 14.5501 14.1894C14.6748 14.1448 14.7894 14.0758 14.8873 13.9866C14.9851 13.8973 15.0643 13.7895 15.1201 13.6694L15.7401 12.2694C16.2571 12.4543 16.7847 12.6079 17.3201 12.7294C17.5868 12.7894 17.8568 12.8394 18.1301 12.8794C18.3575 12.9282 18.5608 13.0547 18.705 13.2372C18.8492 13.4198 18.9253 13.6468 18.9201 13.8794L18.9401 16.9994Z" fill="#67D9B7"/>

                         </g>
                       </symbol>
                     </svg>
                     <div class="form-input-wrapper">
                       <input type="text" class="form-input-control" id="Phone" placeholder="Phone" v-model="Phone">
                       <label class="form-input-label"  for="Phone">Phone</label>
                       <svg class='form-input-icon'>
                         <use xlink:href='#mobile'></use>
                       </svg>
                     </div>
                   </div>
                   <div>
                     <svg style='display: none;'>
                       <symbol id='user' viewBox="0 0 32 32">
                         <g>
                           <path d="M10 14C9.69555 13.9964 9.39732 14.0862 9.14544 14.2573C8.89357 14.4284 8.70015 14.6725 8.59121 14.9568C8.48228 15.2411 8.46306 15.552 8.53615 15.8476C8.60923 16.1431 8.77111 16.4092 9 16.61V18C9 18.2652 9.10536 18.5196 9.29289 18.7071C9.48043 18.8946 9.73478 19 10 19C10.2652 19 10.5196 18.8946 10.7071 18.7071C10.8946 18.5196 11 18.2652 11 18V16.61C11.2289 16.4092 11.3908 16.1431 11.4639 15.8476C11.5369 15.552 11.5177 15.2411 11.4088 14.9568C11.2999 14.6725 11.1064 14.4284 10.8546 14.2573C10.6027 14.0862 10.3045 13.9964 10 14ZM15 10V8C15 6.67392 14.4732 5.40215 13.5355 4.46447C12.5979 3.52678 11.3261 3 10 3C8.67392 3 7.40215 3.52678 6.46447 4.46447C5.52678 5.40215 5 6.67392 5 8V10C4.20435 10 3.44129 10.3161 2.87868 10.8787C2.31607 11.4413 2 12.2044 2 13V20C2 20.7956 2.31607 21.5587 2.87868 22.1213C3.44129 22.6839 4.20435 23 5 23H15C15.7956 23 16.5587 22.6839 17.1213 22.1213C17.6839 21.5587 18 20.7956 18 20V13C18 12.2044 17.6839 11.4413 17.1213 10.8787C16.5587 10.3161 15.7956 10 15 10ZM7 8C7 7.20435 7.31607 6.44129 7.87868 5.87868C8.44129 5.31607 9.20435 5 10 5C10.7956 5 11.5587 5.31607 12.1213 5.87868C12.6839 6.44129 13 7.20435 13 8V10H7V8ZM16 20C16 20.2652 15.8946 20.5196 15.7071 20.7071C15.5196 20.8946 15.2652 21 15 21H5C4.73478 21 4.48043 20.8946 4.29289 20.7071C4.10536 20.5196 4 20.2652 4 20V13C4 12.7348 4.10536 12.4804 4.29289 12.2929C4.48043 12.1054 4.73478 12 5 12H15C15.2652 12 15.5196 12.1054 15.7071 12.2929C15.8946 12.4804 16 12.7348 16 13V20Z" fill="#67D9B7"/>
                           <path d="M17.8285 21H19C19.7957 21 20.5587 20.6839 21.1213 20.1213C21.684 19.5587 22 18.7956 22 18V11C22 10.2044 21.684 9.44129 21.1213 8.87868C20.5587 8.31607 19.7957 8 19 8V6C19 4.67392 18.4732 3.40215 17.5356 2.46447C16.5979 1.52678 15.3261 1 14 1C12.6739 1 11.4022 1.52678 10.4645 2.46447C10.2962 2.63276 10.1411 2.81181 10 3C10.7977 3 11.5758 3.19064 12.2734 3.54669C12.7755 3.19332 13.3778 3 14 3C14.7957 3 15.5587 3.31607 16.1213 3.87868C16.684 4.44129 17 5.20435 17 6V8H15V10H19C19.2652 10 19.5196 10.1054 19.7071 10.2929C19.8947 10.4804 20 10.7348 20 11V18C20 18.2652 19.8947 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H18V20C18 20.3439 17.941 20.6818 17.8285 21Z" fill="#67D9B7"/>

                         </g>
                       </symbol>
                     </svg>
                     <div class="form-input-wrapper">
                       <input type="password" class="form-input-control" id="Confirm-password" placeholder="Confirm password" v-model="ConfirmPassword">
                       <label class="form-input-label"  for="Confirm-password">Confirm password</label>
                       <svg class='form-input-icon'>
                         <use xlink:href='#user'></use>
                       </svg>
                     </div>
                   </div>

                     <div class=" form-checkbox">
                       <input type="checkbox" class="form-checkbox-custom" id="happy" name="happy" value="yes">
                       <label class="form-check-label label-check" for="happy"> <h6>I agree to the <a href="#" class="label-check-info">Terms & Conditions</a></h6></label>
                     </div>
                 </div>
               </div>

             </div>
             <div class="form-btn-block">
               <button type="button" @click="SingUp" class="form-btn form-btn-color">Sign Up</button>

             </div>
             <div class="form-footer">
               <h5>If you have an account, <button>Log In</button></h5>
             </div>

           </form>

         </div>

       </div>

     </div>
   </div>
  </div>
</template>

<script>
import  {supabase}  from "../Supabase/supabase.js"

export default {
  name: 'HelloWorld',
  prop:['setUser'],
  components:{
  },
  data(){
    return{
      FirstName:'',
      Password:'',
      Email:'',
      SecondName:'',
      Phone: '',
      ConfirmPassword:'',
      options:[
         {
           name:'Afghanistan',
           value:1
         },
        {
          name:'Albania',
          value:2
        },
        {
          name:'Algeria',
          value:3
        },
        {
          name:'Andorra',
          value:4
        },
        {
          name:'Afghanistan',
          value:5
        },
        {
          name:'Albania',
          value:6
        },
        {
          name:'Algeria',
          value:7
        },
        {
          name:'Andorra',
          value:8
        },
        {
          name:'Afghanistan',
          value:9
        },
        {
          name:'Albania',
          value:10
        },
        {
          name:'Algeria',
          value:11
        },
        {
          name:'Andorra',
          value:12
        },
        {
          name:'Afghanistan',
          value:13
        },
        {
          name:'Albania',
          value:14
        },
        {
          name:'Algeria',
          value:15
        },
        {
          name:'Andorra',
          value:16
        }
      ],
      selected: 'Country',
      OptionsWith:false
    }
  },
  methods:{
    optionSelect(option){
      this.selected = option.name;
      this.OptionsWith = false
    },
   async LogIn(){
     const { user ,error } = await supabase.auth.signIn({

       password: this.Password,
       email: this.email,

     })
      if(error){
        console.error(error);
        alert('your sinIn failed')
      }else{
        this.setUser(user);
      }

      this.Password = '';
      this.email = '';
    },
   async SingUp(){
     const { error } = await supabase.auth.signUp({
       name: this.FirstName,
       second:this.SecondName,
       phone: this.Phone,
       selected: this.selected,
     /*  password: this.Password,
       ConfirmPassword: this.ConfirmPassword,
       email: this.email,*/


     });
        if(error){
          console.error(error);
          alert("Your singUp failed")
        }
     this.FirstName = '';
     this.SecondName = '';
     this.Phone = '';
     this.selected = 'Country';

  /*   this.Email = '';
     this.Password = '';
     this.ConfirmPassword = '';*/

    },

  }



}
</script>

<style scoped lang="scss">
.form{
  &-bg-img{

      background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),url('../assets/img/bg-cover.jpg');
      background-size: cover;

      width: 100%;
      height: 100vh;




    &-blur{
        width: 100%;
        height: 100vh;

        position: relative;
        z-index: 1;
        background: inherit;
        overflow: hidden;

    }
    &-blur:before {
       content: "";
       position: absolute;
       background: inherit;
       z-index: -1;
       top: 0;
       left: 0;
       right: 0;
       bottom: 0;
       filter: blur(14px);

     }
   }
  &-center{
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    height: 100vh;
  }

  &-col-one{
    display: flex;
    flex-direction:row;
    justify-content: flex-end!important;
  }

  &-title{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin-bottom: 30px;
    }
    h2{
      font-family:RubikMedium,sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      color: white;
      margin-bottom: 55px;
      span{

        color: #6CEEC7;
      }
    }
  }

  &-one, &-two{
    width: 350px;
  }
  &-input{
     &-wrapper {
        position: relative;
        width: 100%;

    }
    &-select{
      position: absolute;
      left: 0;
      top:60px;
      padding: 10px 10px;
      z-index: 3;
      width: 100%;
      height: 180px;

      overflow: scroll;
      background: #FFFFFF;
      border: 1px solid #FFFFFF;
      box-sizing: border-box;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
      border-radius: 5px;

      &-options{
        padding: 10px 23px;
        font-family:RubikMedium,sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 18px;

        /* identical to box height */

        color: #5E5E5E;
        transition: 0.3s;

      }
      &-options:hover{
        padding: 15px 42px;
        transition: 0.3s;
        font-family:RubikMedium,sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 18px;

        /* identical to box height */

        color: #212121;
      }
    }
    &-arrow{
      position: absolute;
      background: url("../assets/svg/arrow_down.svg");
      background-repeat: no-repeat;
      background-size: 20px 20px;
      right: 10px;
      top: 20px;
      width: 30px;
      height: 30px;
      transition: 0.3s;

      &-active{
        position: absolute;
        background: url("../assets/svg/arrow_up.svg");
        background-repeat: no-repeat;
        background-size: 20px 20px;
        right: 10px;
        top: 20px;
        width: 30px;
        height: 30px;
        transition: 0.3s;
      }
    }
    &-label{
      position: absolute;
      top: 5px;
      left: 51px;
      font-size: 11px;
      opacity: 1;
      transform: translateY(0);
      font-family:RubikMedium,sans-serif;

      transition: all 0.3s ease-out;
      color:#6CEEC7;
    }
    &-control:placeholder-shown + &-label{
      opacity: 0;
      transform: translateY(1rem);

    }


    &-control{
      padding: 14px 30px 14px 50px;

      margin-bottom: 30px;
      outline: none;
      width: 100%;

      font-family:RubikMedium,sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 19px;
      color: white;
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid #FFFFFF;
      box-sizing: border-box;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
      border-radius: 5px;
      transition: 0.3s;
      transition: border-color .3s linear;
    }
    &-icon{
      position: absolute;
      width: 35px;
      height:35px;
      left: 15px;
      top: 15px;
      fill: #808080;
      transition: fill .1s linear;
    }

    &-control:focus{
      border-color: #6CEEC7;;
      transition: 0.3s;
    }
    &-control:hover{
      border-color: #6CEEC7;;
      transition: 0.3s;
    }


  }

  &-btn-block{
    width: 58%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  &-btn{
   padding: 17px 47px;
    cursor: pointer;
    margin-top: 30px;
    font-family:RubikMedium,sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 19px;
    line-height: 23px;

    /* identical to box height */
    text-align: center;

    color: #000000;
  }


  &-btn-color{
    background: transparent;
    color: #E0E0E0;
    border: 1px solid #6CEEC7;
    box-sizing: border-box;
    border-radius: 5px;

    transition: 0.3s;

  }
  &-btn-color:hover{
    background: #6CEEC7;
    color: black;
    border: 1px solid #6CEEC7;
    box-sizing: border-box;
    border-radius: 5px;

    transition: 0.3s;

  }

  &-checkbox{
     margin-top: 15px;
    .label-check-info{
      color: #6CEEC7;
    }
    .label-check h6{
      font-family:RubikMedium,sans-serif;
      margin-left: 10px;
      font-weight: 300;
      font-size: 15px;
      color: #E0E0E0;
    }
    .label-check {
      /*padding-left: 5px;*/
      margin-top: 2px;

    }
     &-custom {
      position: absolute;
      z-index: -1;
      opacity: 0;

    }

    &-custom+label {
      display: inline-flex;
      align-items: center;
      user-select: none;
    }
    &-custom+label::before {
      content: '';
      display: inline-block;
      width: 1.3em;
      height: 1.3em;
      flex-shrink: 0;
      flex-grow: 0;
      border: 1px solid #6CEEC7;
      border-radius: 0.25em;
      margin-right: 0.5em;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
    }
    &-custom:checked+label::before {
      border-color: #6CEEC7;
      background-color: #6CEEC7;
      background-image: url("../assets/svg/check.svg");
    }
    /* стили для активного состояния чекбокса (при нажатии на него) */
/*    &-custom:not(:disabled):active+label::before {
      background-color: #6CEEC7;
      border-color: blue;
    }*/
    /* стили для чекбокса, находящегося в фокусе */
    &-custom:focus+label::before {
      box-shadow: 0 0 3px 1px #6CEEC7;
    }






  }
  &-footer{
    position: absolute;
    bottom: 5%;
    left: 45%;
    h5{
     font-family:RubikMedium,sans-serif;;
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      line-height: 18px;
      /* identical to box height */
      color: #E0E0E0;
      button{
        color: #6CEEC7;
        background: transparent;
        border: 1px solid transparent;



      }


    }
  }

}
@media screen  and (max-width: 991px) {
  .form{
    &-row{
      display: flex;
      flex-direction: row;
      justify-content: center;
      width:100%;
    }
    &-col-one{
      display: block;
    }
    &-one, &-two{
     width: 100%;

    }
  }


}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
  transform: translateX(0);
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transition: 0.3s;
  transform: translateX(1);
}

/*RobotoMedium
RobotoRegular
RubikMedium*/
</style>
