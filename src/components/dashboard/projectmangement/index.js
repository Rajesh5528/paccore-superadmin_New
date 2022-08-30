import React, { Component,useState } from 'react';
import Header from '../header';
import Sidebar from '../sidebar';


const ProjectMangement = () => {
    
    return ( 
        <div class="cemp">
            <Header />
            <div class="mobsid">
            <Sidebar />
            </div>
            <div class="page__widgets">
                <div class="widget widget_shadow">
                  <div class="widget__title">Working Projects</div>
                  <div class="quality">
                    <div class="quality__list">
                      <div class="quality__item quality__item_chart">
                        <div class="quality__preview bg-pink-opacity"><img class="quality__pic" src={process.env.PUBLIC_URL + '/assets/images/figure-1.png'} alt="" /></div>
                        <div class="quality__details">
                          <div class="quality__title title">BIJBOL</div>
                          <div class="quality__info caption-sm">Dental Networking Application</div>
                        </div>
                        <div class="quality__chart">
                          <div id="chart-circle-purple"></div>
                          <div class="quality__percent caption-sm">90%</div>
                        </div>
                      </div>
                      <div class="quality__item quality__item_chart">
                        <div class="quality__preview bg-yellow-opacity"><img class="quality__pic" src={process.env.PUBLIC_URL + '/assets/images/figure-2.png'} alt="" /></div>
                        <div class="quality__details">
                          <div class="quality__title title">Yira Life</div>
                          <div class="quality__info caption-sm">Health Care Application</div>
                        </div>
                        <div class="quality__chart">
                          <div id="chart-circle-green"></div>
                          <div class="quality__percent caption-sm">90%</div>
                        </div>
                      </div>
                      <div class="quality__item quality__item_chart">
                        <div class="quality__preview bg-blue-light-opacity"><img class="quality__pic" src={process.env.PUBLIC_URL + '/assets/images/figure-3.png'} alt="" /></div>
                        <div class="quality__details">
                          <div class="quality__title title">CarSimple</div>
                          <div class="quality__info caption-sm">Fleet Management Application</div>
                        </div>
                        <div class="quality__chart">
                          <div id="chart-circle-red"></div>
                          <div class="quality__percent caption-sm">15%</div>
                        </div>
                      </div>
                    </div><button class="quality__btn btn btn_black btn_wide">Discover More</button>
                  </div>
                </div>
                
              </div>
        </div>
     );
}
 
export default ProjectMangement;