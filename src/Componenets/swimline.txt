This component generates the swimline which holds cards. Users can define the number and titles of swimlanes.
Map function is used to get data from API and render cards with those data in each swimlane.
When API is requested, it will return a String which will include the detil of each swimlane like title and
cards it holds. swimlane.jsx will map the string to each swimlane to create swimlane will gien title and cards.
When users made some change to cards or tiles in swimlanes, the string got from API will get updated, and the
frontend will show the changes by re-mapping the new data.
Users are allowed to edit cards in swimlanes for example draging them through swilanes,or delete cards.