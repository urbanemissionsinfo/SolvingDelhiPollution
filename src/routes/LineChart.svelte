<script>
  import * as d3 from "d3";

  // Receive plot data as prop.
  export let data;
	export let futureyears;
	export let max_drop_covid=40;
	export let max_drop_heat=75;
	export let max_drop_stubble=0;

	// Baseline contributions of sources - ug/m3
	const stubbleshare = 8;
	const remainingshare = 69;
	const heatshare = 22;
	$: for (var i=1; i<futureyears.length; i++){
		futureyears[i].averagePM25 = futureyears[1].averagePM25 - 
			(stubbleshare*max_drop_stubble/100 + heatshare*max_drop_heat/100 + remainingshare*max_drop_covid/100)*(futureyears[i].drop/100);
	}
	var allData = data.concat(futureyears);
	
  // The chart dimensions and margins as optional props.
  export let width = 928;
  export let height = 500;
  export let marginTop = 20;
  export let marginRight = 30;
  export let marginBottom = 30;
  export let marginLeft = 40;

  // Create the x (horizontal position) scale.
  const xScale = d3.scaleTime(
    d3.extent(allData, (d) =>new Date(d.year)),
    [marginLeft+30, width - marginRight]
  );
  // Create the y (vertical position) scale.
  const yScale = d3.scaleLinear(
    [0, d3.max(allData, (d) => d.averagePM25)+20],
    [height - marginBottom, marginTop]
  );

  // Create the line generator. SVG Path Generator
  const line = d3
    .line()
    .x((d) => xScale(new Date(d.year)))
    .y((d) => yScale(d.averagePM25));
</script>

<svg
  {width}
  {height}
  viewBox="0 0 {width} {height}"
  style:max-width="100%"
  style:height="auto"
>
  <!-- X-Axis -->
  <g transform="translate(0,{height - marginBottom})">
    <line stroke="currentColor" x1={marginLeft - 6} x2={width} />
		
    {#each xScale.ticks(d3.utcYear.every(5)) as tick}
      <!-- X-Axis Ticks -->
      <line
        stroke="currentColor"
        x1={xScale(tick)}
        x2={xScale(tick)}
        y1={0}
        y2={6}
      />
			 <!-- 
          Grid Lines. 
        -->
        <line
          stroke="currentColor"
          stroke-opacity="0.1"
          x1={xScale(tick)}
          x2={xScale(tick)}
					y1={0}
          y2={-height + marginBottom}
        />

      <!-- X-Axis Tick Labels -->
      <text fill="currentColor" text-anchor="middle" x={xScale(tick)} y={22}>
        {tick.getFullYear()}
      </text>
    {/each}
  </g>

  <!-- Y-Axis and Grid Lines -->
  <g transform="translate({marginLeft},0)">
    {#each yScale.ticks() as tick}
      {#if tick !== 0}
        <!-- 
          Grid Lines. 
          Note: First line is skipped since the x-axis is already present at 0. 
        -->
        <line
          stroke="currentColor"
          stroke-opacity="0.1"
          x1={0}
          x2={width - marginLeft}
          y1={yScale(tick)}
          y2={yScale(tick)}
        />

        <!-- 
          Y-Axis Ticks. 
          Note: First tick is skipped since the x-axis already acts as a tick. 
        -->
        <line
          stroke="currentColor"
          x1={0}
          x2={-6}
          y1={yScale(tick)}
          y2={yScale(tick)}
        />
      {/if}

      <!-- Y-Axis Tick Labels -->
      <text
        fill="currentColor"
        text-anchor="end"
        dominant-baseline="middle"
        x={-9}
        y={yScale(tick)}
      >
        {tick}
      </text>
    {/each}

    <!-- Y-Axis Label -->
    <text fill="currentColor" text-anchor="start" x={-marginLeft} y={15}>
      Average PM2.5 Concentration
    </text>
  </g>

  <path fill="none" stroke="steelblue" stroke-width="2.5" d={line(data)} />
	<!-- Square markers on the line -->
	<g fill='steelblue'>
		{#each data as d}
			<rect
				x={xScale(new Date(d.year))-4}
				y={yScale(d.averagePM25)-4}
				width=8
				height=8
				/>
			{/each}
	</g>
	<!-- National Ambient standard  -->
	<line stroke-dasharray="4" style="stroke:green;stroke-width:2" x1={marginLeft - 6} x2={width} y1={yScale(40)} y2={yScale(40)}/>
	<text x={marginLeft} y={yScale(41)} fill="black" font-size=1.5rem> National ambient standard</text>
	<!--Line chart  -->
	<path fill="none" stroke="purple" stroke-width="2.5" d={line(futureyears)} />
	<!-- Square markers on the line -->
	<g fill='purple'>
		{#each futureyears as d}
			<rect
				x={xScale(new Date(d.year))-4}
				y={yScale(d.averagePM25)-4}
				width=8
				height=8
				/>
			{/each}
	</g>
	
	
	<!-- Legend in top-right corner -->
	<g transform={`translate(${width - marginRight - 210}, ${marginTop - 20})`}>
	  <!-- Square marker for the line -->
	  <rect width="24" height="24" fill="steelblue" />
		<line stroke="steelblue" stroke-width="2" x1="-15" y1="12" x2="40" y2="12" />
	
	  <!-- Label text -->
	  <text x="40" y="20" fill="black" font-size="20">
	    Historical data
	  </text>
	</g>
	<g transform={`translate(${width - marginRight - 210}, ${marginTop+10})`}>
	<!-- Square marker for the line -->
	<rect width="24" height="24" fill="purple" />
	<line stroke="purple" stroke-width="2" x1="-15" y1="12" x2="40" y2="12" />

	<!-- Label text -->
	<text x="40" y="20" fill="black" font-size="20">
		Future projections
	</text>
</g>
</svg>