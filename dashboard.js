import React from "react";
import {
  InputGroup,
  Card,
  Icon,
  Colors,
  H3,
  Button,
  H5,
  Tag,
  Switch
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

class RecruiterDashboard extends React.Component {
  constructor() {
    super();
    this.state = { someKey: "someValue" };
  }

  render() {
    return (
      <div class="wrapper" align="center">
        <div
          style={{
            margin: "0 auto",
            width: 1024,
            paddingTop: 100
          }}
        >
          <InputGroup leftIcon="search" placeholder="Find developers..." />
        </div>
        <div style={{ display: "inline-block", padding: 10, maxWidth: 250 }}>
          <Card interactive={false}>
            <H5>Showing Results for:</H5>
            <span style={{ padding: 10 }}>
              <Tag>C# Developer</Tag>
            </span>
            <p />
            <span style={{ padding: 10 }}>
              <Tag>Linux</Tag>
            </span>
            <p />
            <span style={{ padding: 10 }}>
              <Tag>Open Source</Tag>
            </span>
            <p />
          </Card>
        </div>
        <div
          style={{
            display: "inline-block",
            width: 760,
            verticalAlign: "top",
            padding: 10
          }}
        >
          {/* Card Template */}
          <Card interactive={true}>
            <div class="wrapper" align="left">
              <div style={{ display: "inline-block" }}>
                <Icon
                  icon={IconNames.PERSON}
                  iconSize="100"
                  style={{
                    color: Colors.GRAY2,
                    align: "left"
                  }}
                />
              </div>
              <div
                style={{
                  display: "inline-block",
                  verticalAlign: "top",
                  padding: 15
                }}
              >
                <H3 style={{ color: Colors.DARK_GRAY3 }}>Linus Torvalds</H3>
                <p style={{ color: Colors.GRAY1 }}>
                  Founder, Developer at Linux
                </p>
                <p style={{ color: Colors.GRAY1 }}>San Francisco, CA</p>
              </div>
              <div
              className="opportunities"
              style={{
                display: "inline-block",
                verticalAlign: "top",
                paddingTop: 15,
                paddingLeft: 100,
              }}
            >
              <Switch
                labelElement={<strong>Open to opportunities</strong>}
                large={true}
                defaultChecked={true}
              />
            </div>

              </div>
              <div class="wrapper">
                <div style={{ display: "inline-block" }} align="right">
                  <div style={{ color: Colors.GRAY3 }}>Current</div>
                  <div style={{ color: Colors.GRAY3 }}>Past</div>
                  <div style={{ color: Colors.GRAY3 }}>Popular Repos</div>
                </div>
                <div
                  class="work-info"
                  aling="left"
                  style={{ display: "inline-block", paddingLeft: 20 }}
                >
                  <div>
                    <span style={{ color: Colors.DARK_GRAY2 }}>
                      Linux Foundation
                    </span>
                  </div>
                  <div>
                    <span style={{ color: Colors.DARK_GRAY2 }}>
                      Linux Foundation
                    </span>
                  </div>
                  <div>
                    <span style={{ color: Colors.DARK_GRAY2 }}>Linux</span>
                  </div>
                </div>
                <div
                  class="chartWrapper"
                  style={{
                    display: "inline-block",
                    verticalAlign: "top",
                    paddingLeft: 15
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      verticalAlign: "top",
                      paddingLeft: 15
                    }}
                  >
                    <H5 align="center">HTML</H5>
                    <Icon
                      align="center"
                      icon={IconNames.DOUGHNUT_CHART}
                      iconSize="35"
                      style={{
                        color: Colors.BLUE1,
                        paddingLeft: 5,
                        paddingRight: 5,
                        paddingTop: 5
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      verticalAlign: "top",
                      paddingLeft: 15
                    }}
                  >
                    <H5 align="center">Node</H5>
                    <Icon
                      align="center"
                      icon={IconNames.DOUGHNUT_CHART}
                      iconSize="35"
                      style={{
                        color: Colors.RED1,
                        paddingLeft: 5,
                        paddingRight: 5,
                        paddingTop: 5
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      verticalAlign: "top",
                      paddingLeft: 15
                    }}
                  >
                    <H5 align="center">C#</H5>
                    <Icon
                      align="center"
                      icon={IconNames.DOUGHNUT_CHART}
                      iconSize="35"
                      style={{
                        color: Colors.GREEN1,
                        paddingLeft: 5,
                        paddingRight: 5,
                        paddingTop: 5
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      verticalAlign: "top",
                      paddingLeft: 15
                    }}
                  >
                    <H5 align="center">CSS</H5>
                    <Icon
                      align="center"
                      icon={IconNames.DOUGHNUT_CHART}
                      iconSize="35"
                      style={{
                        color: Colors.ORANGE1,
                        paddingLeft: 5,
                        paddingRight: 5,
                        paddingTop: 5
                      }}
                    />
                  </div>
                </div>
              </div>
              <div display="inline-block" align="left">
              <div
                style={{
                  display: "inline-block",
                  verticalAlign: "top",
                  padding: 15,
                }}
              >
                <Button intent="success">Save Developer</Button>
              </div>  
              </div>
              
            
          </Card>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: "otherValue" });
  }
}

export default RecruiterDashboard;
