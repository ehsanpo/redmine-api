import * as React from "react";
import serverData from "../data/servers.json";
import redIssue from "../data/redmines-issue.json";
import buckets from "../data/redmines-allbuckets.json";
import all from "../data/redmines-sprint.json";
import teamE from "../data/redmines-teame.json";

const Grid = ({ children }) => {
  return <div className="grid-23">{children}</div>;
};
const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};
const Box = ({ children }) => {
  return (
    <div className="h-full bg-blue-600 bg-opacity-75 px-8  pb-4 rounded-lg relative">
      {children}
    </div>
  );
};
const BoxX = ({ children }) => {
  return (
    <div className="h-full bg-purple-600 bg-opacity-75 px-8  pb-4 rounded-lg relative">
      {children}
    </div>
  );
};
const Buckets = ({ children }) => {
  return (
    <div className="h-full bg-blue-200 bg-opacity-75 px-8  pb-4 rounded-lg relative">
      {children}
    </div>
  );
};

const Tag = ({ children, className = "bg-blue-200 text-blue-700" }) => {
  return (
    <div
      className={`tag-box text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 ${className} rounded-full`}
    >
      {children}
    </div>
  );
};
const Drawer = ({ children, title }) => {
  const [showResults, setShowResults] = React.useState(true);
  const onClick = () => setShowResults((prevCheck) => !prevCheck);
  const sign = showResults ? " + " : " - ";
  return (
    <div>
      <h3 className="onclick" onClick={onClick}>
        {sign} {title}
      </h3>
      <div className={`${showResults && "minimize"} grid-2 accordian`}>
        {children}
      </div>
    </div>
  );
};

// markup
const IndexPage = () => {
  const { total_countIssue, issuesIssue } = redIssue;
  return (
    <main>
      <Container>
        <div className="flex">
          <div>
            <Drawer title={`Your Redmine issues ${redIssue.total_count}`}>
              {redIssue.issues.map((issue) => {
                return (
                  <Box key={issue.id}>
                    <Tag>Tickets</Tag>
                    <h2>
                      {issue.id} - {issue.status.name}
                    </h2>
                    <h5>{issue.custom_fields[0].value}</h5>
                    <p>{issue.subject}</p>
                    <a
                      target="_blank"
                      href={`https://redmine.bredband2.se/issues/${issue.id}`}
                    >
                      Link
                    </a>
                  </Box>
                );
              })}
            </Drawer>
            <Drawer title={`Sprint - Team E ${teamE.total_count}`}>
              {teamE.issues.map((issue) => {
                return (
                  <Box key={issue.id}>
                    <Tag>Team E</Tag>
                    <h2>
                      {issue.id} - {issue.status.name}
                    </h2>
                    <h5>{issue.custom_fields[0].value}</h5>
                    <p>{issue.subject}</p>
                    <a
                      target="_blank"
                      href={`https://redmine.bredband2.se/issues/${issue.id}`}
                    >
                      Link
                    </a>
                  </Box>
                );
              })}
            </Drawer>
            <Drawer title={`All Buckets ${buckets.total_count}`}>
              {buckets.issues.map((issue) => {
                console.log(issue);
                return (
                  <Buckets key={issue.id}>
                    <Tag className="bg-blue-200 text-blue-700">Buckets</Tag>
                    <h2>
                      {issue.id} - {issue.status.name}
                    </h2>
                    <h5>From {issue.custom_fields[0].value}</h5>

                    {issue.assigned_to && (
                      <h6>Assigned to {issue.assigned_to.name} </h6>
                    )}

                    <p>{issue.subject}</p>
                    <a
                      target="_blank"
                      href={`https://redmine.bredband2.se/issues/${issue.id}`}
                    >
                      Link
                    </a>
                  </Buckets>
                );
              })}
            </Drawer>
            <Drawer title={`Sprint - All ${all.total_count}`}>
              {all.issues.map((issue) => {
                console.log(issue);
                return (
                  <Buckets key={issue.id}>
                    <Tag className="bg-blue-200 text-blue-700">All</Tag>
                    <h2>
                      {issue.id} - {issue.status.name}
                    </h2>
                    <h5>From {issue.custom_fields[0].value}</h5>

                    {issue.assigned_to && (
                      <h6>Assigned to {issue.assigned_to.name} </h6>
                    )}

                    <p>{issue.subject}</p>
                    <a
                      target="_blank"
                      href={`https://redmine.bredband2.se/issues/${issue.id}`}
                    >
                      Link
                    </a>
                  </Buckets>
                );
              })}
            </Drawer>
          </div>
          <Drawer title={`ServerLists ${serverData.servers.length}`}>
          {serverData.servers.map((server) => {
            return (
              <BoxX key={server.id} p={2} bg="background">
                <Tag className="bg-purple-200 text-purple-700">Servers</Tag>
                <h2>{server.name}</h2>
                <h5
                  onClick={() => {
                    navigator.clipboard.writeText(server.ssh);
                  }}
                >
                  {server.ssh}
                </h5>
                <p>{server.description}</p>
                <a target="_blank" href={server.link}>
                  Link
                </a>
              </BoxX>
            );
          })}
        </Drawer>
        </div>


      </Container>
    </main>
  );
};

export default IndexPage;
