/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 1532.0, "series": [{"data": [[0.0, 3.0], [0.1, 5.0], [0.2, 7.0], [0.3, 9.0], [0.4, 11.0], [0.5, 12.0], [0.6, 12.0], [0.7, 13.0], [0.8, 13.0], [0.9, 14.0], [1.0, 14.0], [1.1, 15.0], [1.2, 16.0], [1.3, 17.0], [1.4, 17.0], [1.5, 18.0], [1.6, 18.0], [1.7, 18.0], [1.8, 19.0], [1.9, 19.0], [2.0, 19.0], [2.1, 19.0], [2.2, 20.0], [2.3, 20.0], [2.4, 20.0], [2.5, 21.0], [2.6, 21.0], [2.7, 21.0], [2.8, 21.0], [2.9, 22.0], [3.0, 22.0], [3.1, 22.0], [3.2, 22.0], [3.3, 23.0], [3.4, 23.0], [3.5, 23.0], [3.6, 23.0], [3.7, 23.0], [3.8, 24.0], [3.9, 24.0], [4.0, 24.0], [4.1, 24.0], [4.2, 24.0], [4.3, 25.0], [4.4, 25.0], [4.5, 25.0], [4.6, 25.0], [4.7, 25.0], [4.8, 25.0], [4.9, 25.0], [5.0, 26.0], [5.1, 26.0], [5.2, 26.0], [5.3, 26.0], [5.4, 26.0], [5.5, 26.0], [5.6, 27.0], [5.7, 27.0], [5.8, 27.0], [5.9, 27.0], [6.0, 27.0], [6.1, 28.0], [6.2, 28.0], [6.3, 28.0], [6.4, 28.0], [6.5, 28.0], [6.6, 28.0], [6.7, 28.0], [6.8, 29.0], [6.9, 29.0], [7.0, 29.0], [7.1, 29.0], [7.2, 29.0], [7.3, 29.0], [7.4, 29.0], [7.5, 30.0], [7.6, 30.0], [7.7, 30.0], [7.8, 30.0], [7.9, 30.0], [8.0, 30.0], [8.1, 30.0], [8.2, 30.0], [8.3, 31.0], [8.4, 31.0], [8.5, 31.0], [8.6, 31.0], [8.7, 31.0], [8.8, 31.0], [8.9, 31.0], [9.0, 31.0], [9.1, 32.0], [9.2, 32.0], [9.3, 32.0], [9.4, 32.0], [9.5, 32.0], [9.6, 32.0], [9.7, 33.0], [9.8, 33.0], [9.9, 33.0], [10.0, 33.0], [10.1, 33.0], [10.2, 33.0], [10.3, 33.0], [10.4, 34.0], [10.5, 34.0], [10.6, 34.0], [10.7, 34.0], [10.8, 34.0], [10.9, 34.0], [11.0, 34.0], [11.1, 34.0], [11.2, 35.0], [11.3, 35.0], [11.4, 35.0], [11.5, 35.0], [11.6, 35.0], [11.7, 35.0], [11.8, 35.0], [11.9, 35.0], [12.0, 36.0], [12.1, 36.0], [12.2, 36.0], [12.3, 36.0], [12.4, 36.0], [12.5, 36.0], [12.6, 36.0], [12.7, 36.0], [12.8, 37.0], [12.9, 37.0], [13.0, 37.0], [13.1, 37.0], [13.2, 37.0], [13.3, 37.0], [13.4, 37.0], [13.5, 37.0], [13.6, 37.0], [13.7, 37.0], [13.8, 37.0], [13.9, 38.0], [14.0, 38.0], [14.1, 38.0], [14.2, 38.0], [14.3, 38.0], [14.4, 38.0], [14.5, 38.0], [14.6, 38.0], [14.7, 38.0], [14.8, 38.0], [14.9, 38.0], [15.0, 38.0], [15.1, 38.0], [15.2, 38.0], [15.3, 38.0], [15.4, 38.0], [15.5, 38.0], [15.6, 38.0], [15.7, 39.0], [15.8, 39.0], [15.9, 39.0], [16.0, 39.0], [16.1, 39.0], [16.2, 39.0], [16.3, 39.0], [16.4, 39.0], [16.5, 39.0], [16.6, 39.0], [16.7, 39.0], [16.8, 39.0], [16.9, 39.0], [17.0, 39.0], [17.1, 39.0], [17.2, 39.0], [17.3, 39.0], [17.4, 39.0], [17.5, 39.0], [17.6, 39.0], [17.7, 39.0], [17.8, 39.0], [17.9, 39.0], [18.0, 39.0], [18.1, 39.0], [18.2, 39.0], [18.3, 39.0], [18.4, 39.0], [18.5, 39.0], [18.6, 40.0], [18.7, 40.0], [18.8, 40.0], [18.9, 40.0], [19.0, 40.0], [19.1, 40.0], [19.2, 40.0], [19.3, 40.0], [19.4, 40.0], [19.5, 40.0], [19.6, 40.0], [19.7, 40.0], [19.8, 40.0], [19.9, 40.0], [20.0, 40.0], [20.1, 40.0], [20.2, 40.0], [20.3, 40.0], [20.4, 40.0], [20.5, 40.0], [20.6, 40.0], [20.7, 40.0], [20.8, 40.0], [20.9, 40.0], [21.0, 40.0], [21.1, 40.0], [21.2, 40.0], [21.3, 40.0], [21.4, 40.0], [21.5, 40.0], [21.6, 40.0], [21.7, 40.0], [21.8, 40.0], [21.9, 40.0], [22.0, 40.0], [22.1, 40.0], [22.2, 40.0], [22.3, 40.0], [22.4, 40.0], [22.5, 40.0], [22.6, 40.0], [22.7, 40.0], [22.8, 40.0], [22.9, 40.0], [23.0, 40.0], [23.1, 40.0], [23.2, 40.0], [23.3, 40.0], [23.4, 41.0], [23.5, 41.0], [23.6, 41.0], [23.7, 41.0], [23.8, 41.0], [23.9, 41.0], [24.0, 41.0], [24.1, 41.0], [24.2, 41.0], [24.3, 41.0], [24.4, 41.0], [24.5, 41.0], [24.6, 41.0], [24.7, 41.0], [24.8, 41.0], [24.9, 41.0], [25.0, 41.0], [25.1, 41.0], [25.2, 41.0], [25.3, 41.0], [25.4, 41.0], [25.5, 41.0], [25.6, 41.0], [25.7, 41.0], [25.8, 41.0], [25.9, 41.0], [26.0, 41.0], [26.1, 41.0], [26.2, 41.0], [26.3, 41.0], [26.4, 41.0], [26.5, 41.0], [26.6, 41.0], [26.7, 41.0], [26.8, 41.0], [26.9, 41.0], [27.0, 41.0], [27.1, 41.0], [27.2, 41.0], [27.3, 41.0], [27.4, 41.0], [27.5, 41.0], [27.6, 41.0], [27.7, 41.0], [27.8, 41.0], [27.9, 41.0], [28.0, 41.0], [28.1, 41.0], [28.2, 41.0], [28.3, 41.0], [28.4, 41.0], [28.5, 41.0], [28.6, 41.0], [28.7, 41.0], [28.8, 41.0], [28.9, 41.0], [29.0, 41.0], [29.1, 41.0], [29.2, 41.0], [29.3, 41.0], [29.4, 41.0], [29.5, 41.0], [29.6, 41.0], [29.7, 41.0], [29.8, 42.0], [29.9, 42.0], [30.0, 42.0], [30.1, 42.0], [30.2, 42.0], [30.3, 42.0], [30.4, 42.0], [30.5, 42.0], [30.6, 42.0], [30.7, 42.0], [30.8, 42.0], [30.9, 42.0], [31.0, 42.0], [31.1, 42.0], [31.2, 42.0], [31.3, 42.0], [31.4, 42.0], [31.5, 42.0], [31.6, 42.0], [31.7, 42.0], [31.8, 42.0], [31.9, 42.0], [32.0, 42.0], [32.1, 42.0], [32.2, 42.0], [32.3, 42.0], [32.4, 42.0], [32.5, 42.0], [32.6, 42.0], [32.7, 42.0], [32.8, 42.0], [32.9, 42.0], [33.0, 42.0], [33.1, 42.0], [33.2, 42.0], [33.3, 42.0], [33.4, 42.0], [33.5, 42.0], [33.6, 42.0], [33.7, 42.0], [33.8, 42.0], [33.9, 42.0], [34.0, 42.0], [34.1, 42.0], [34.2, 42.0], [34.3, 42.0], [34.4, 42.0], [34.5, 42.0], [34.6, 42.0], [34.7, 42.0], [34.8, 42.0], [34.9, 42.0], [35.0, 42.0], [35.1, 42.0], [35.2, 42.0], [35.3, 42.0], [35.4, 42.0], [35.5, 42.0], [35.6, 42.0], [35.7, 42.0], [35.8, 42.0], [35.9, 42.0], [36.0, 42.0], [36.1, 42.0], [36.2, 42.0], [36.3, 42.0], [36.4, 42.0], [36.5, 42.0], [36.6, 42.0], [36.7, 42.0], [36.8, 42.0], [36.9, 42.0], [37.0, 42.0], [37.1, 42.0], [37.2, 42.0], [37.3, 42.0], [37.4, 43.0], [37.5, 43.0], [37.6, 43.0], [37.7, 43.0], [37.8, 43.0], [37.9, 43.0], [38.0, 43.0], [38.1, 43.0], [38.2, 43.0], [38.3, 43.0], [38.4, 43.0], [38.5, 43.0], [38.6, 43.0], [38.7, 43.0], [38.8, 43.0], [38.9, 43.0], [39.0, 43.0], [39.1, 43.0], [39.2, 43.0], [39.3, 43.0], [39.4, 43.0], [39.5, 43.0], [39.6, 43.0], [39.7, 43.0], [39.8, 43.0], [39.9, 43.0], [40.0, 43.0], [40.1, 43.0], [40.2, 43.0], [40.3, 43.0], [40.4, 43.0], [40.5, 43.0], [40.6, 43.0], [40.7, 43.0], [40.8, 43.0], [40.9, 43.0], [41.0, 43.0], [41.1, 43.0], [41.2, 43.0], [41.3, 43.0], [41.4, 43.0], [41.5, 43.0], [41.6, 43.0], [41.7, 43.0], [41.8, 43.0], [41.9, 43.0], [42.0, 43.0], [42.1, 43.0], [42.2, 43.0], [42.3, 43.0], [42.4, 43.0], [42.5, 43.0], [42.6, 43.0], [42.7, 43.0], [42.8, 43.0], [42.9, 43.0], [43.0, 43.0], [43.1, 43.0], [43.2, 43.0], [43.3, 43.0], [43.4, 43.0], [43.5, 43.0], [43.6, 43.0], [43.7, 43.0], [43.8, 43.0], [43.9, 43.0], [44.0, 43.0], [44.1, 43.0], [44.2, 43.0], [44.3, 43.0], [44.4, 43.0], [44.5, 43.0], [44.6, 43.0], [44.7, 43.0], [44.8, 43.0], [44.9, 43.0], [45.0, 43.0], [45.1, 43.0], [45.2, 43.0], [45.3, 43.0], [45.4, 43.0], [45.5, 43.0], [45.6, 43.0], [45.7, 43.0], [45.8, 43.0], [45.9, 43.0], [46.0, 43.0], [46.1, 43.0], [46.2, 44.0], [46.3, 44.0], [46.4, 44.0], [46.5, 44.0], [46.6, 44.0], [46.7, 44.0], [46.8, 44.0], [46.9, 44.0], [47.0, 44.0], [47.1, 44.0], [47.2, 44.0], [47.3, 44.0], [47.4, 44.0], [47.5, 44.0], [47.6, 44.0], [47.7, 44.0], [47.8, 44.0], [47.9, 44.0], [48.0, 44.0], [48.1, 44.0], [48.2, 44.0], [48.3, 44.0], [48.4, 44.0], [48.5, 44.0], [48.6, 44.0], [48.7, 44.0], [48.8, 44.0], [48.9, 44.0], [49.0, 44.0], [49.1, 44.0], [49.2, 44.0], [49.3, 44.0], [49.4, 44.0], [49.5, 44.0], [49.6, 44.0], [49.7, 44.0], [49.8, 44.0], [49.9, 44.0], [50.0, 44.0], [50.1, 44.0], [50.2, 44.0], [50.3, 44.0], [50.4, 44.0], [50.5, 44.0], [50.6, 44.0], [50.7, 44.0], [50.8, 44.0], [50.9, 44.0], [51.0, 44.0], [51.1, 44.0], [51.2, 44.0], [51.3, 44.0], [51.4, 44.0], [51.5, 44.0], [51.6, 44.0], [51.7, 44.0], [51.8, 44.0], [51.9, 44.0], [52.0, 44.0], [52.1, 44.0], [52.2, 44.0], [52.3, 44.0], [52.4, 44.0], [52.5, 44.0], [52.6, 44.0], [52.7, 44.0], [52.8, 44.0], [52.9, 44.0], [53.0, 44.0], [53.1, 44.0], [53.2, 44.0], [53.3, 44.0], [53.4, 44.0], [53.5, 44.0], [53.6, 44.0], [53.7, 44.0], [53.8, 44.0], [53.9, 44.0], [54.0, 44.0], [54.1, 44.0], [54.2, 44.0], [54.3, 44.0], [54.4, 44.0], [54.5, 44.0], [54.6, 44.0], [54.7, 44.0], [54.8, 44.0], [54.9, 44.0], [55.0, 44.0], [55.1, 44.0], [55.2, 44.0], [55.3, 44.0], [55.4, 44.0], [55.5, 44.0], [55.6, 45.0], [55.7, 45.0], [55.8, 45.0], [55.9, 45.0], [56.0, 45.0], [56.1, 45.0], [56.2, 45.0], [56.3, 45.0], [56.4, 45.0], [56.5, 45.0], [56.6, 45.0], [56.7, 45.0], [56.8, 45.0], [56.9, 45.0], [57.0, 45.0], [57.1, 45.0], [57.2, 45.0], [57.3, 45.0], [57.4, 45.0], [57.5, 45.0], [57.6, 45.0], [57.7, 45.0], [57.8, 45.0], [57.9, 45.0], [58.0, 45.0], [58.1, 45.0], [58.2, 45.0], [58.3, 45.0], [58.4, 45.0], [58.5, 45.0], [58.6, 45.0], [58.7, 45.0], [58.8, 45.0], [58.9, 45.0], [59.0, 45.0], [59.1, 45.0], [59.2, 45.0], [59.3, 45.0], [59.4, 45.0], [59.5, 45.0], [59.6, 45.0], [59.7, 45.0], [59.8, 45.0], [59.9, 45.0], [60.0, 45.0], [60.1, 45.0], [60.2, 45.0], [60.3, 45.0], [60.4, 45.0], [60.5, 45.0], [60.6, 45.0], [60.7, 45.0], [60.8, 45.0], [60.9, 45.0], [61.0, 45.0], [61.1, 45.0], [61.2, 45.0], [61.3, 45.0], [61.4, 45.0], [61.5, 45.0], [61.6, 45.0], [61.7, 45.0], [61.8, 45.0], [61.9, 45.0], [62.0, 45.0], [62.1, 45.0], [62.2, 45.0], [62.3, 45.0], [62.4, 45.0], [62.5, 45.0], [62.6, 45.0], [62.7, 45.0], [62.8, 45.0], [62.9, 45.0], [63.0, 45.0], [63.1, 45.0], [63.2, 45.0], [63.3, 45.0], [63.4, 45.0], [63.5, 45.0], [63.6, 45.0], [63.7, 45.0], [63.8, 45.0], [63.9, 45.0], [64.0, 45.0], [64.1, 45.0], [64.2, 45.0], [64.3, 45.0], [64.4, 45.0], [64.5, 45.0], [64.6, 45.0], [64.7, 45.0], [64.8, 45.0], [64.9, 45.0], [65.0, 45.0], [65.1, 45.0], [65.2, 45.0], [65.3, 45.0], [65.4, 45.0], [65.5, 45.0], [65.6, 45.0], [65.7, 46.0], [65.8, 46.0], [65.9, 46.0], [66.0, 46.0], [66.1, 46.0], [66.2, 46.0], [66.3, 46.0], [66.4, 46.0], [66.5, 46.0], [66.6, 46.0], [66.7, 46.0], [66.8, 46.0], [66.9, 46.0], [67.0, 46.0], [67.1, 46.0], [67.2, 46.0], [67.3, 46.0], [67.4, 46.0], [67.5, 46.0], [67.6, 46.0], [67.7, 46.0], [67.8, 46.0], [67.9, 46.0], [68.0, 46.0], [68.1, 46.0], [68.2, 46.0], [68.3, 46.0], [68.4, 46.0], [68.5, 46.0], [68.6, 46.0], [68.7, 46.0], [68.8, 46.0], [68.9, 46.0], [69.0, 46.0], [69.1, 46.0], [69.2, 46.0], [69.3, 46.0], [69.4, 46.0], [69.5, 46.0], [69.6, 46.0], [69.7, 46.0], [69.8, 46.0], [69.9, 46.0], [70.0, 46.0], [70.1, 46.0], [70.2, 46.0], [70.3, 46.0], [70.4, 46.0], [70.5, 46.0], [70.6, 46.0], [70.7, 46.0], [70.8, 46.0], [70.9, 46.0], [71.0, 46.0], [71.1, 46.0], [71.2, 46.0], [71.3, 46.0], [71.4, 46.0], [71.5, 46.0], [71.6, 46.0], [71.7, 46.0], [71.8, 46.0], [71.9, 46.0], [72.0, 46.0], [72.1, 46.0], [72.2, 46.0], [72.3, 46.0], [72.4, 46.0], [72.5, 46.0], [72.6, 46.0], [72.7, 46.0], [72.8, 46.0], [72.9, 46.0], [73.0, 46.0], [73.1, 46.0], [73.2, 46.0], [73.3, 46.0], [73.4, 46.0], [73.5, 46.0], [73.6, 46.0], [73.7, 46.0], [73.8, 46.0], [73.9, 46.0], [74.0, 46.0], [74.1, 46.0], [74.2, 46.0], [74.3, 46.0], [74.4, 46.0], [74.5, 46.0], [74.6, 46.0], [74.7, 46.0], [74.8, 46.0], [74.9, 46.0], [75.0, 46.0], [75.1, 46.0], [75.2, 46.0], [75.3, 46.0], [75.4, 46.0], [75.5, 47.0], [75.6, 47.0], [75.7, 47.0], [75.8, 47.0], [75.9, 47.0], [76.0, 47.0], [76.1, 47.0], [76.2, 47.0], [76.3, 47.0], [76.4, 47.0], [76.5, 47.0], [76.6, 47.0], [76.7, 47.0], [76.8, 47.0], [76.9, 47.0], [77.0, 47.0], [77.1, 47.0], [77.2, 47.0], [77.3, 47.0], [77.4, 47.0], [77.5, 47.0], [77.6, 47.0], [77.7, 47.0], [77.8, 47.0], [77.9, 47.0], [78.0, 47.0], [78.1, 47.0], [78.2, 47.0], [78.3, 47.0], [78.4, 47.0], [78.5, 47.0], [78.6, 47.0], [78.7, 47.0], [78.8, 47.0], [78.9, 47.0], [79.0, 47.0], [79.1, 47.0], [79.2, 47.0], [79.3, 47.0], [79.4, 47.0], [79.5, 47.0], [79.6, 47.0], [79.7, 47.0], [79.8, 47.0], [79.9, 47.0], [80.0, 47.0], [80.1, 47.0], [80.2, 47.0], [80.3, 47.0], [80.4, 47.0], [80.5, 47.0], [80.6, 47.0], [80.7, 47.0], [80.8, 47.0], [80.9, 47.0], [81.0, 47.0], [81.1, 47.0], [81.2, 47.0], [81.3, 47.0], [81.4, 47.0], [81.5, 47.0], [81.6, 47.0], [81.7, 47.0], [81.8, 47.0], [81.9, 47.0], [82.0, 47.0], [82.1, 47.0], [82.2, 47.0], [82.3, 47.0], [82.4, 47.0], [82.5, 48.0], [82.6, 48.0], [82.7, 48.0], [82.8, 48.0], [82.9, 48.0], [83.0, 48.0], [83.1, 48.0], [83.2, 48.0], [83.3, 48.0], [83.4, 48.0], [83.5, 48.0], [83.6, 48.0], [83.7, 48.0], [83.8, 48.0], [83.9, 48.0], [84.0, 48.0], [84.1, 48.0], [84.2, 48.0], [84.3, 48.0], [84.4, 48.0], [84.5, 48.0], [84.6, 48.0], [84.7, 48.0], [84.8, 48.0], [84.9, 48.0], [85.0, 48.0], [85.1, 48.0], [85.2, 48.0], [85.3, 48.0], [85.4, 48.0], [85.5, 48.0], [85.6, 48.0], [85.7, 48.0], [85.8, 48.0], [85.9, 48.0], [86.0, 48.0], [86.1, 48.0], [86.2, 48.0], [86.3, 48.0], [86.4, 49.0], [86.5, 49.0], [86.6, 49.0], [86.7, 49.0], [86.8, 49.0], [86.9, 49.0], [87.0, 49.0], [87.1, 49.0], [87.2, 49.0], [87.3, 49.0], [87.4, 49.0], [87.5, 49.0], [87.6, 49.0], [87.7, 49.0], [87.8, 49.0], [87.9, 49.0], [88.0, 49.0], [88.1, 49.0], [88.2, 49.0], [88.3, 49.0], [88.4, 49.0], [88.5, 49.0], [88.6, 50.0], [88.7, 50.0], [88.8, 50.0], [88.9, 50.0], [89.0, 50.0], [89.1, 50.0], [89.2, 50.0], [89.3, 50.0], [89.4, 50.0], [89.5, 50.0], [89.6, 50.0], [89.7, 51.0], [89.8, 51.0], [89.9, 51.0], [90.0, 51.0], [90.1, 51.0], [90.2, 51.0], [90.3, 52.0], [90.4, 52.0], [90.5, 52.0], [90.6, 52.0], [90.7, 53.0], [90.8, 53.0], [90.9, 54.0], [91.0, 54.0], [91.1, 55.0], [91.2, 56.0], [91.3, 56.0], [91.4, 57.0], [91.5, 58.0], [91.6, 58.0], [91.7, 59.0], [91.8, 60.0], [91.9, 60.0], [92.0, 60.0], [92.1, 61.0], [92.2, 61.0], [92.3, 62.0], [92.4, 62.0], [92.5, 62.0], [92.6, 63.0], [92.7, 63.0], [92.8, 63.0], [92.9, 64.0], [93.0, 64.0], [93.1, 65.0], [93.2, 67.0], [93.3, 68.0], [93.4, 69.0], [93.5, 69.0], [93.6, 69.0], [93.7, 70.0], [93.8, 70.0], [93.9, 70.0], [94.0, 70.0], [94.1, 71.0], [94.2, 71.0], [94.3, 71.0], [94.4, 71.0], [94.5, 72.0], [94.6, 72.0], [94.7, 72.0], [94.8, 72.0], [94.9, 72.0], [95.0, 73.0], [95.1, 73.0], [95.2, 73.0], [95.3, 73.0], [95.4, 73.0], [95.5, 73.0], [95.6, 73.0], [95.7, 73.0], [95.8, 74.0], [95.9, 74.0], [96.0, 74.0], [96.1, 74.0], [96.2, 74.0], [96.3, 74.0], [96.4, 74.0], [96.5, 75.0], [96.6, 75.0], [96.7, 75.0], [96.8, 75.0], [96.9, 75.0], [97.0, 76.0], [97.1, 76.0], [97.2, 76.0], [97.3, 76.0], [97.4, 76.0], [97.5, 76.0], [97.6, 77.0], [97.7, 77.0], [97.8, 77.0], [97.9, 77.0], [98.0, 77.0], [98.1, 77.0], [98.2, 78.0], [98.3, 78.0], [98.4, 78.0], [98.5, 78.0], [98.6, 79.0], [98.7, 79.0], [98.8, 79.0], [98.9, 79.0], [99.0, 80.0], [99.1, 80.0], [99.2, 81.0], [99.3, 82.0], [99.4, 82.0], [99.5, 84.0], [99.6, 84.0], [99.7, 90.0], [99.8, 114.0], [99.9, 156.0], [100.0, 1532.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 99751.0, "series": [{"data": [[0.0, 99751.0], [600.0, 1.0], [700.0, 1.0], [800.0, 1.0], [200.0, 19.0], [900.0, 1.0], [1000.0, 1.0], [1100.0, 1.0], [300.0, 28.0], [1200.0, 1.0], [1300.0, 1.0], [1400.0, 1.0], [1500.0, 2.0], [100.0, 184.0], [400.0, 6.0], [500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 99988.0, "series": [{"data": [[0.0, 99988.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 10.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 2.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 87.13989290495336, "minX": 1.71864882E12, "maxY": 94.24011307667652, "series": [{"data": [[1.71864888E12, 87.13989290495336], [1.71864882E12, 94.24011307667652]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864888E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 3.0, "minX": 1.0, "maxY": 184.43902439024387, "series": [{"data": [[3.0, 3.5], [4.0, 4.6], [5.0, 3.6363636363636362], [6.0, 3.5555555555555554], [7.0, 3.8461538461538463], [8.0, 4.157894736842104], [9.0, 4.533333333333334], [10.0, 5.1000000000000005], [11.0, 5.142857142857143], [12.0, 5.80952380952381], [13.0, 6.681818181818182], [14.0, 7.285714285714286], [15.0, 7.5], [16.0, 6.9642857142857135], [17.0, 184.43902439024387], [18.0, 17.854545454545455], [19.0, 20.04255319148937], [20.0, 15.92307692307692], [21.0, 14.242774566473983], [22.0, 51.85964912280702], [23.0, 21.009174311926596], [24.0, 12.461538461538463], [25.0, 37.977272727272734], [26.0, 21.827868852459016], [27.0, 15.414965986394563], [28.0, 31.24117647058825], [29.0, 20.19626168224298], [30.0, 22.70129870129869], [31.0, 19.030651340996176], [32.0, 23.028901734104036], [33.0, 23.137931034482758], [34.0, 24.341463414634138], [35.0, 24.17514124293785], [36.0, 28.411764705882348], [37.0, 26.60233918128656], [38.0, 25.17346938775511], [39.0, 25.143564356435657], [40.0, 27.087378640776702], [41.0, 29.478260869565204], [42.0, 26.302222222222227], [43.0, 23.782278481012632], [44.0, 28.84158415841583], [45.0, 25.25062034739453], [46.0, 34.66176470588235], [47.0, 31.723404255319156], [48.0, 32.86124401913875], [49.0, 30.20238095238096], [50.0, 29.995867768595012], [51.0, 33.03108808290152], [52.0, 29.692307692307676], [53.0, 32.50672645739911], [54.0, 37.66013071895423], [55.0, 29.636904761904766], [56.0, 40.723270440251575], [57.0, 29.69653767820775], [58.0, 32.944615384615346], [59.0, 38.40782122905027], [60.0, 32.02083333333333], [61.0, 59.047619047619015], [62.0, 38.08403361344538], [63.0, 30.375262054507353], [64.0, 42.54787234042553], [65.0, 34.34572490706322], [66.0, 38.39999999999999], [67.0, 39.587813620071685], [68.0, 44.74479166666667], [69.0, 43.95767195767195], [70.0, 37.801369863013704], [71.0, 41.66386554621845], [72.0, 35.19918283963233], [73.0, 48.249999999999986], [74.0, 48.486111111111136], [75.0, 39.39999999999999], [76.0, 41.20088300220743], [77.0, 56.651612903225825], [78.0, 41.59722222222218], [79.0, 48.86], [80.0, 39.10596026490067], [81.0, 40.97855227882039], [82.0, 70.95689655172411], [83.0, 49.650000000000006], [84.0, 58.791946308724796], [85.0, 61.72463768115941], [86.0, 50.24060150375941], [87.0, 55.148148148148145], [88.0, 54.18340611353714], [89.0, 62.88571428571426], [90.0, 75.22916666666666], [91.0, 62.386503067484696], [92.0, 70.15068493150685], [93.0, 61.313725490196035], [94.0, 65.85034013605443], [95.0, 59.974576271186436], [96.0, 60.76381909547744], [97.0, 63.90810810810811], [98.0, 52.717391304347856], [99.0, 72.7465753424657], [100.0, 46.307790710929204], [1.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[92.01249000000003, 44.596230000000006]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 73206.0, "minX": 1.71864882E12, "maxY": 546587.2666666667, "series": [{"data": [[1.71864888E12, 249875.4], [1.71864882E12, 546587.2666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71864888E12, 73206.0], [1.71864882E12, 160127.33333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864888E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 38.34464843501017, "minX": 1.71864882E12, "maxY": 47.45428846209858, "series": [{"data": [[1.71864888E12, 38.34464843501017], [1.71864882E12, 47.45428846209858]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864888E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 38.34311850576903, "minX": 1.71864882E12, "maxY": 47.45226299070278, "series": [{"data": [[1.71864888E12, 38.34311850576903], [1.71864882E12, 47.45226299070278]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864888E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.71864882E12, "maxY": 0.001063736776148976, "series": [{"data": [[1.71864888E12, 0.0], [1.71864882E12, 0.001063736776148976]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864888E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 3.0, "minX": 1.71864882E12, "maxY": 1532.0, "series": [{"data": [[1.71864888E12, 57.0], [1.71864882E12, 1532.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71864888E12, 46.0], [1.71864882E12, 47.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71864888E12, 49.0], [1.71864882E12, 50.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71864888E12, 47.0], [1.71864882E12, 48.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71864888E12, 3.0], [1.71864882E12, 6.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71864888E12, 38.0], [1.71864882E12, 44.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864888E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 14.0, "minX": 770.0, "maxY": 76.0, "series": [{"data": [[770.0, 21.0], [1093.0, 26.0], [1269.0, 32.0], [1259.0, 42.0], [1317.0, 53.0], [1286.0, 62.0], [1290.0, 70.0], [1316.0, 75.0], [1305.0, 76.0], [1323.0, 74.0], [1359.0, 72.0], [1737.0, 44.0], [1813.0, 14.0], [2291.0, 44.0], [2180.0, 46.0], [2223.0, 45.0], [2262.0, 44.0], [2263.0, 44.0], [2219.0, 45.0], [2289.0, 44.0], [2288.0, 44.0], [2279.0, 44.0], [2281.0, 44.0], [2282.0, 37.0], [2285.0, 44.0], [2275.0, 44.0], [2272.0, 44.0], [2261.0, 44.0], [2208.0, 45.0], [2250.0, 45.0], [2253.0, 29.0], [2260.0, 24.0], [2299.0, 44.0], [2245.0, 38.0], [2298.0, 43.0], [2297.0, 44.0], [2267.0, 44.0], [2269.0, 44.0], [2271.0, 44.0], [2270.0, 44.0], [2305.0, 43.0], [2317.0, 43.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2317.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 14.0, "minX": 770.0, "maxY": 76.0, "series": [{"data": [[770.0, 21.0], [1093.0, 26.0], [1269.0, 32.0], [1259.0, 42.0], [1317.0, 53.0], [1286.0, 62.0], [1290.0, 70.0], [1316.0, 75.0], [1305.0, 76.0], [1323.0, 74.0], [1359.0, 72.0], [1737.0, 44.0], [1813.0, 14.0], [2291.0, 44.0], [2180.0, 46.0], [2223.0, 45.0], [2262.0, 44.0], [2263.0, 44.0], [2219.0, 45.0], [2289.0, 44.0], [2288.0, 44.0], [2279.0, 44.0], [2281.0, 44.0], [2282.0, 37.0], [2285.0, 44.0], [2275.0, 44.0], [2272.0, 44.0], [2261.0, 44.0], [2208.0, 45.0], [2250.0, 45.0], [2253.0, 29.0], [2260.0, 24.0], [2299.0, 44.0], [2245.0, 38.0], [2298.0, 43.0], [2297.0, 44.0], [2267.0, 44.0], [2269.0, 44.0], [2271.0, 44.0], [2270.0, 44.0], [2305.0, 43.0], [2317.0, 43.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2317.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 521.2333333333333, "minX": 1.71864882E12, "maxY": 1145.4333333333334, "series": [{"data": [[1.71864888E12, 521.2333333333333], [1.71864882E12, 1145.4333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864888E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 522.9, "minX": 1.71864882E12, "maxY": 1143.7666666666667, "series": [{"data": [[1.71864888E12, 522.9], [1.71864882E12, 1143.7666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864888E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 522.9, "minX": 1.71864882E12, "maxY": 1143.7666666666667, "series": [{"data": [[1.71864888E12, 522.9], [1.71864882E12, 1143.7666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864888E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 522.9, "minX": 1.71864882E12, "maxY": 1143.7666666666667, "series": [{"data": [[1.71864888E12, 522.9], [1.71864882E12, 1143.7666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864888E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

