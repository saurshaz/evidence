---
queries:
  - season_summary: nba/season_summary.sql
  - records_table: nba/records_table.sql
  - elo_latest: nba/elo_latest.sql
  - seed_details: nba/seed_details.sql
  - wins_details: nba/wins_details.sql
  - playoff_wins: nba/playoff_odds_by_team_by_wins.sql
  - playoff_odds: nba/playoff_odds.sql
  - most_recent_games: nba/most_recent_games.sql
  - game_trend: nba/game_trend.sql
  - future_games: nba/future_games.sql
---

```sql filtered_season_summary
    select *
    from ${season_summary}
    where team like 'BOS'
```


<script>

let contextMenuOptions = [{'key': 'Cross Filter', menuClass: 'menu-option'},{'key': 'Drill to Detail', menuClass: 'menu-option'}, {'key': 'Drill By', menuClass: 'menu-option', menuClass: 'menu-option'}, {'key': 'Show Correlations', menuClass: 'menu-option'}];
	
let contextMenuClickHandler = () => {
    console.log('clicked contextmenu option >>', event.target , ' params ::: ', window.__selectedContextMenuParams);
    inputs.conference = window.__selectedContextMenuParams?.data?.name;
    event.target.parentElement.parentElement.style.display='none';
    window.__selectedContextMenuParams = undefined;
}


let dblclickHandler = () => {
    console.log('dblclickHandler option >>', event.target);
    if (inputs.conference == '%'){
        inputs.conference = __dblclickParams.name || __dblclickParams?.data?.name;
    } else {
        inputs.conference = "%";
    }
}


  onMount(() => {
    const charts = document.querySelector('div.chart-container div.chart');
    for (let i = 0; i < charts.length; i++) {
        let _echartDom = charts[i];
        const _echart = echarts.getInstanceByDom(_echartDom);
        console.log('_echartDom ', _echartDom);
        console.log('Echart instance is ',_echart);
        // debugger;
    }

  })
</script>

# Detailed Analysis for <Value data={filtered_season_summary} column=team_long/>

## Season-to-date Results

<BigValue 
    data={elo_latest.filter(d => d.team === 'BOS')} 
    value='elo_rating' 
    comparison='since_start' 
/> 

<BigValue 
    data={filtered_season_summary} 
    value='predicted_wins' 
    comparison='vs_vegas_num1' 
/> 

<BigValue 
    data={filtered_season_summary} 
    value='seed_range' 
/> 

<BigValue 
    data={filtered_season_summary} 
    value='win_range' 
/> 

<LineChart
    data={game_trend.filter(d =>  d.team === 'BOS')} 
    x=date
    y=cumulative_elo_change_num0
    title='elo change over time'
/>

### Most Recent Games

<DataTable
    data={most_recent_games.filter(d => d.home_team ===  d.team === 'BOS')} 
    rows=5
>
  <Column id=date/>
  <Column id=T title=" "/>
  <Column id=visiting_team/>
  <Column id=" "/>
  <Column id=home_team/>
  <Column id=winning_team/>
  <Column id=score/>
</DataTable>


### Matchup Summary

<DataTable
    data={records_table.filter(d =>  d.team === 'BOS')} 
    rows=7
/>

{#if future_games.length > 0}
### Upcoming Schedule

<DataTable data={future_games.filter(d =>  d.team === 'BOS')} rows=5 link=game_link>
  <Column id=date/>
  <Column id=T title=" "/>
  <Column id=visitor/>
  <Column id=home/>
  <Column id=home_win_pct1 title="Win % (Home)"/>
  <Column id=american_odds align=right title="Odds (Home)"/>
  <Column id=implied_line_num1 title="Line (Home)"/>
  <Column id=predicted_score title="Score"/>
</DataTable>

### Playoff Odds

<BigValue 
    data={playoff_odds.filter(d =>  d.team === 'BOS')} 
    value='top_six_pct1' 
/> 

<BigValue 
    data={playoff_odds.filter(d =>  d.team === 'BOS')} 
    value='play_in_pct1' 
/> 

<BigValue 
    data={playoff_odds.filter(d =>  d.team === 'BOS')} 
    value='missed_playoffs_pct1' 
/> 

<AreaChart 
    data={playoff_wins.filter(d =>  d.team === 'BOS')}
    x=wins
    y=odds_pct1
    series=season_result
    xAxisTitle=wins
    title='projected end of season wins'
/>

<BarChart 
    data={seed_details.filter(d =>  d.team === 'BOS')} 
    x=seed
    y=occurances_pct1
    xAxisTitle=seed
    title='projected end of season seeding'
/>

{#if game_trend.length == 0}

## Playoff Analysis

add the following:
- play-in analysis (if playin games exist, i.e. count > 1)
  - this will show % of time by spot, and then % of advancing by seed
- playoff analysis
  - most common opponents with win rate by series (mostly nulls, sparsely populated)


  {/if}
  {/if}



# Sample Dashboard
aaaaaaaaaaaaaaaaaaaaaaaaaaaaa

```sql aaa
select  conf, count(conf) as _count from src_nba_teams where conf like '${inputs.conference}' group by conf order by _count desc
```

<ButtonGroup
    data={aaa} 
    name=conference
    value=conf
>
    <ButtonGroupItem valueLabel="All" value="%" default />
</ButtonGroup>



{#if inputs.conference != 'null'}
<DataTable data={aaa} link=team_link rows=30>
  <Column id=conf/>
  <Column id=_count/>
</DataTable>

{:else }

<DataTable data={aaa} link=team_link rows=30>
<!-- <DataTable data={aaa} rows=5 link=game_link> -->
  <Column id=conf/>
  <Column id=_count/>
</DataTable>

{/if}
```sql pieTestData1
select  count(conf) as value, conf as name from src_nba_teams where conf like '${inputs.conference}' group by name order by value desc
```


```sql pieTestData2
select  tournament_group as name, count(tournament_group) as value, count(conf) as value from src_nba_teams where conf like '${inputs.conference}' group by name, tournament_group order by value desc
```

<span style="display:flex">
<div style="width: 40vw; left: 10vw;">
<h2>The filter applied is: {inputs.conference}</h2>


<ECharts 
    connextGroup={1}
    contextMenuOptions={contextMenuOptions}
	contextMenuClickHandler={contextMenuClickHandler}
    contextmenuEnabled={true}
    dblclickEnabled={true}
	dblclickHandler={dblclickHandler}
    config={
        {
            tooltip: {
                formatter: '{b}: {c} ({d}%)'
            },
            series: [
                {
                    type: 'pie',
                    radius: ['40%', '70%'],
                    data: [...pieTestData1],
                    itemStyle: {
                        emphasis: {
                            click: function(params) {
                                alert('Clicked on category: ' + params.name + ', value: ' + params.value);
                            }
                        }
                    }
                }
            ],
            init: function(params) {
                console.log(params)
            }(),
        }
    } />
</div>


<div style="width: 40vw; left: 50vw;">
<ECharts
    contextMenuOptions={contextMenuOptions}
	contextMenuClickHandler={contextMenuClickHandler}
	dblclickEnabled={true}
	dblclickHandler={dblclickHandler}
    contextmenuEnabled={true}
    connextGroup={1}
    config={
        {
            tooltip: {
                formatter: '{b}: {c} ({d}%)'
            },
            series: [
                {
                    type: 'pie',
                    radius: ['40%', '70%'],
                    data: [...pieTestData2],
                }
            ],
            init: function(params) {
                console.log(params)
            }(),
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                return params.name + ': ' + params.value + '<br/>' +
                        '<a href="report_details.html?category=' + params.name + '">Details</a>';
                }
            },
        }
    } />
</div>
</span>

