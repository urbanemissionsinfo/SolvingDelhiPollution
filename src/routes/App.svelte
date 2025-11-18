<!-- 
  Original plot: https://observablehq.com/@d3/bar-chart/2
  Blog post version: https://tonydang.blog/d3-svelte-line-chart/
-->

<script>  
	import data from "./data.json";
	import futureyears from "./futureyears.json";
  import LineChart from "./LineChart.svelte";

	import Range from "./Range.svelte"
	let max_covid_drop = $state(40);
	let max_stubble_drop = $state(50);
	let max_heat_drop = $state(50);
	let theme = "default";
</script>
<h1> Emission changes required for Delhi's PM2.5 to reach 40 μg/m3 by 2040 </h1>
<div class:purple-theme={theme === "purple"}>
	<label for="basic-range">Maximum drop in COVID-like emissions by 2040 (%)</label>
	<Range on:change={(e) => max_covid_drop = e.detail.value} id="basic-slider"
		initialValue = {max_covid_drop} />
</div>

<div class:purple-theme={theme === "purple"}>
	<label for="basic-range">Maximum drop in stubble burning emissions by 2040 (%)</label>
	<Range on:change={(e) => max_stubble_drop = e.detail.value} id="basic-slider"
		initialValue = {max_stubble_drop} />
</div>

<div class:purple-theme={theme === "purple"}>
	<label for="basic-range">Maximum drop in residential heating emissions by 2040 (%)</label>
	<Range on:change={(e) => max_heat_drop = e.detail.value} id="basic-slider"
		initialValue = {max_heat_drop} />
</div>

<div class=row>
<LineChart
	{data} {futureyears}
	max_drop_covid = {max_covid_drop}
	max_drop_stubble = {max_stubble_drop}
	max_drop_heat = {max_heat_drop}/>
</div>

<div id="footer">
	<p> <a href="https://urbanemissions.info/">© 2025 Urban Emissions Info LLP</a></p>
        <p>Say hello!
            <a href="mailto:saikrishnadammalapati@gmail.com"> <i class="fa fa-envelope"></i> Email</a>  
            <a href="https://www.linkedin.com/in/sarath-guttikunda-3a01149"> <img src="https://d-saikrishna.github.io/assets/linkedin.png">  LinkedIn</a> 
            <a href="https://github.com/urbanemissionsinfo" target="_blank"> <img src="https://d-saikrishna.github.io/assets/github.png"> GitHub</a>
        </p>
</div>

<style>
	.row {
			display: flex;
			flex-direction: row;
			width: 100%;
			margin: 1em;
			justify-content: center;
			align-items: center;
		}
		
	.purple-theme {
		--track-focus: #C368FF;
		--track-highlight-bgcolor: #C368FF;
		--track-highlight-bg: linear-gradient(90deg, #C368FF, #C965FF);
		--thumb-holding-outline: rgba(191, 102, 251, 0.3);
		--tooltip-bgcolor: #C368FF;
		--tooltip-bg: linear-gradient(45deg, #C368FF, #C965FF);
		margin: 1em;
	}
	
	.theme-buttons {
		display: flex;
		justify-content: center;
	}

	h3 {
		text-align: center;
	}
	
	label {
		margin: 8px;
		font-size: 16px;
		font-weight: 600;
	}
	#footer{
		background-color: #6285FF;
		font-family: 'system-ui';
		font-size:1.5rem;
	}

	#footer a, #footer p{
		color: black;
		padding-right: 10px;
		text-align: center;
    	font-size: 0.9em;
		font-family: 'system-ui';
	}

</style>