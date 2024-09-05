---
queries:
  - thru_date: nba/thru_date.sql
  - wins_seed_scatter: nba/wins_seed_scatter.sql
  - seed_details: nba/seed_details.sql
  - tournament_seeding: nba/tournament_seeding.sql
  - reg_season: nba/reg_season.sql
  - standings: nba/standings.sql
  - summary_by_team: nba/summary_by_team.sql

  - season_summary: nba/season_summary.sql
  - records_table: nba/records_table.sql
  - elo_latest: nba/elo_latest.sql
  - wins_details: nba/wins_details.sql
  - playoff_wins: nba/playoff_odds_by_team_by_wins.sql
  - playoff_odds: nba/playoff_odds.sql
  - most_recent_games: nba/most_recent_games.sql
  - game_trend: nba/game_trend.sql
  - future_games: nba/future_games.sql
---

# AAAAAAAAAAA
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


<ECharts config={
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
            contextmenu: function(params) {
                console.log(params)
                console.log(event)
                contextMenu.mount()
            }(),
        }
    } />
</div>


<div style="width: 40vw; left: 50vw;">
<ECharts  config={
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
            contextmenu: function(params) {
                console.log(params)
                console.log(event)
                contextMenu.mount()
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


<script>
    // import echarts from "../../../../core-components/dist/unsorted/ECharts.svelte";

	// import { ECharts } from '@evidence-dev/core-components';
    // var chart =  Echarts.getInstanceByDom(document.querySelector('[_echarts_instance_="ec_1725358939337"]'))
    setTimeout(() => {
        // debugger;
        console.log('Echarts ', Echarts)
    },2000)
    var contextMenu = new window.ContextMenu({
        menuItems: [
            {
                label: "Select",
                onClick: () => {
                    console.log('event params >>> ', event.params);
                    console.log('params >>> ', arguments);
                    console.log(' chart ', ECharts)
                    window.menuOpts
                        var closestChart = document.elementsFromPoint(event.screenX, event.screenY)
                        console.log("closestChart ", closestChart);
                        // debugger;
                        for (let i in closestChart){
                            const e = closestChart[i];
                            if (e === 'CANVAS' && closestChart[i].target.classList.contains('chart-container')){
                                console.log('select clicked >> for ', e);
                                // debugger;
                                break;
                            }
                        } 
                }
            },
            {
                label: "DrillDown",
                onClick: () => {
                    // debugger;
                    console.log('params >>> ', arguments);
                    var closestChart = document.elementsFromPoint(event.screenX, event.screenY)
                    console.log("closestChart ", closestChart);
                    for (let i in closestChart){
                        const e = closestChart[i];
                        if (e === 'CANVAS' && closestChart[i].target.classList.contains('chart-container')){
                                console.log('Drilldown clicked >> for ', e);
                            // debugger;
                            console.log("Paste");
                            break;
                        }
                    } 
                }
            },
        ]
    });



</script>


```sql teams
select * from src_nba_teams
order by team
```

```sql filtered_future_games
    select *
    from ${future_games}
    where home like '${inputs.team_dd.value}' OR visitor like '${inputs.team_dd.value}'
```

# NBA Monte Carlo Simulator

<Alert status="info">
This data was last updated as of <Value data={thru_date} column=end_date/>.
</Alert>

## [Upcoming Games](/nba/predictions)

{#if filtered_future_games.length > 0}
<Dropdown
    data={teams} 
    name=team_dd
    value=team
    title="Select a Team"
>
    <DropdownOption valueLabel="All Teams" value="%" />
</Dropdown>

<DataTable data={filtered_future_games} rows=5 link=game_link>
  <Column id=date/>
  <Column id=T title=" "/>
  <Column id=visitor/>
  <Column id=home/>
  <Column id=home_win_pct1 title="Win % (Home)"/>
  <Column id=american_odds align=right title="Odds (Home)"/>
  <Column id=implied_line_num1 title="Line (Home)"/>
  <Column id=predicted_score title="Score"/>
</DataTable>

{:else}

_The regular season is over. Check back next year!_

{/if}

## [Team Standings](/nba/teams)

<DataTable data={summary_by_team} link=team_link rows=5 search=true>
  <Column id=" " contentType=image height=25px/>
  <Column id=team/>
  <Column id=record/>
  <Column id=elo_rating/>
  <Column id=avg_wins/>
  <Column id=elo_vs_vegas_num1 contentType=delta/>
  <Column id=make_playoffs_pct1/>
  <Column id=win_finals_pct1/>
</DataTable>

## Conference Summaries

### End of Season Seeding

<Tabs>
    <Tab label="East">
        <AreaChart
            data={seed_details.filter(d => d.conf === "East")} 
            x=seed
            y=occurances_pct1
            series=team
            xAxisTitle=seed
            title='Eastern Conference'
            yMax=1
        />
    </Tab>

    <Tab label="West">
        <AreaChart
            data={seed_details.filter(d => d.conf === "West")} 
            x=seed
            y=occurances_pct1
            series=team
            xAxisTitle=seed
            title='Western Conference'
            yMax=1
        />
    </Tab>
</Tabs>

### End of Season Playoff Odds

<Tabs>
    <Tab label="East">
        <BarChart
            data={wins_seed_scatter.filter(d => d.conf === "East")} 
            x=team
            y=odds_pct1
            series=season_result
            xAxisTitle=seed
            title='Eastern Conference'
            swapXY=true
            sort=sort_key
        />
    </Tab>

    <Tab label="West">
        <BarChart
            data={wins_seed_scatter.filter(d => d.conf === "West")} 
            x=team
            y=odds_pct1
            series=season_result
            xAxisTitle=seed
            title='Western Conference'
            swapXY=true
            sort=sort_key
        />
    </Tab>
</Tabs>


