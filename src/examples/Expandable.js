import React from "react";
import Expandable from "../components/Expandable";
import "./expandable.ope.scss";
import "./expandable.opt.scss";

export function PlainExpandable() {
  return (
    <div className="plain">
      <Expandable>
        <Expandable.Header>
          <Expandable.Toggle>toogle</Expandable.Toggle>
        </Expandable.Header>
        <Expandable.Content>Some Content</Expandable.Content>
      </Expandable>
    </div>
  );
}

export function OptimizeExpandable() {
  return (
    <div className="optimize-dashboard">
      <Expandable className="expandable" isExpanded={false}>
        <Expandable.Header className="header">
          <Expandable.Toggle className="toggle">
            <svg className="icon" viewBox="0 0 24 24" width="24" height="24">
              <path d="M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z" />
            </svg>

            <h1>
              <svg width="36" height="28" viewBox="0 0 36 28">
                <g fill="none">
                  <path
                    fill="#6A727E"
                    d="M4,8 L4,4 L8,4 L8,0 L36,0 L36,20 L32,20 L32,24 L28,24 L28,28 L0,28 L0,8 L4,8 Z M6,8 L28,8 L28,22 L30,22 L30,6 L6,6 L6,8 Z M10,4 L32,4 L32,18 L34,18 L34,2 L10,2 L10,4 Z M2,10 L2,26 L26,26 L26,10 L2,10 Z"
                  />
                  <rect
                    width="8"
                    height="8"
                    x="15.5"
                    y="15.5"
                    fill="#FFF"
                    stroke="#9CA4B0"
                  />
                  <rect width="13" height="2" x="4" y="12" fill="#9CA4B0" />
                  <rect
                    width="9"
                    height="8"
                    x="4.5"
                    y="15.5"
                    fill="#FFF"
                    stroke="#9CA4B0"
                  />
                  <polyline
                    stroke="#6A727E"
                    points="6 21 8.489 18.566 9.857 20.303 12 18"
                  />
                  <rect width="2" height="1" x="17" y="17" fill="#6A727E" />
                  <rect width="2" height="1" x="20" y="17" fill="#6A727E" />
                  <rect width="2" height="1" x="17" y="19" fill="#6A727E" />
                  <rect width="2" height="1" x="20" y="19" fill="#6A727E" />
                  <rect width="2" height="1" x="17" y="21" fill="#6A727E" />
                  <rect width="2" height="1" x="20" y="21" fill="#6A727E" />
                </g>
              </svg>
              DashBoards
            </h1>
          </Expandable.Toggle>
        </Expandable.Header>
        <Expandable.Content className="content">
          <ul className="entryList">
            <li className="listItem">
              <a className="info">
                <span className="icon">
                  <svg width="28" height="20" viewBox="0 0 28 20">
                    <g fill="none">
                      <path
                        fill="#6A727E"
                        d="M0,0 L28,0 L28,20 L0,20 L0,0 Z M2,2 L2,18 L26,18 L26,2 L2,2 Z"
                      />
                      <rect
                        width="8"
                        height="8"
                        x="15.5"
                        y="7.5"
                        fill="#FFF"
                        stroke="#9CA4B0"
                      />
                      <rect width="13" height="2" x="4" y="4" fill="#9CA4B0" />
                      <rect
                        width="9"
                        height="8"
                        x="4.5"
                        y="7.5"
                        fill="#FFF"
                        stroke="#9CA4B0"
                      />
                      <polyline
                        stroke="#6A727E"
                        points="6 13 8.489 10.566 9.857 12.303 12 10"
                      />
                      <rect width="2" height="1" x="17" y="9" fill="#6A727E" />
                      <rect width="2" height="1" x="20" y="9" fill="#6A727E" />
                      <rect width="2" height="1" x="17" y="11" fill="#6A727E" />
                      <rect width="2" height="1" x="20" y="11" fill="#6A727E" />
                      <rect width="2" height="1" x="17" y="13" fill="#6A727E" />
                      <rect width="2" height="1" x="20" y="13" fill="#6A727E" />
                    </g>
                  </svg>
                </span>

                <div class="textInfo">
                  <div class="data dataTitle">
                    <h3>New Dashboard</h3>
                  </div>
                  <div class="extraInfo">
                    <span class="customData">1 Report</span>
                    <span class="LastModified">
                      Last changed Aug 14, 2019 12:35 PM
                      <br />
                      by <strong>demo</strong>
                    </span>
                  </div>
                </div>
              </a>
              <div className="collections" />
              <div className="operations" />
            </li>
          </ul>
        </Expandable.Content>
      </Expandable>
    </div>
  );
}

export function OperateExpandable() {
  return (
    <Expandable className="operate-expandable" isExpanded={false}>
      <Expandable.Header className="header">
        <Expandable.Toggle aria-label="Toggle" className="toggle">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path d="M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z" />
          </svg>
        </Expandable.Toggle>
        <svg className="icon" viewBox="0 0 24 24" width="16" height="16">
          <path d="M12 9q0.844 0 1.43-0.586t0.586-1.43-0.586-1.406-1.43-0.563-1.43 0.563-0.586 1.406 0.586 1.43 1.43 0.586zM12 14.016q0.797-0.047 1.383-0.633t0.586-1.383-0.586-1.383-1.383-0.633h-0.047q-0.844 0-1.43 0.586t-0.586 1.43 0.586 1.43 1.43 0.586h0.047zM12 18.984q0.797-0.047 1.383-0.609t0.586-1.359-0.586-1.383-1.383-0.633h-0.047q-0.844 0-1.43 0.586t-0.586 1.43 0.586 1.406 1.43 0.563h0.047zM20.016 9.984q0 1.406-0.844 2.461t-2.156 1.43v1.125h3q0 1.406-0.844 2.438t-2.156 1.406v1.172q0 0.422-0.305 0.703t-0.727 0.281h-7.969q-0.422 0-0.727-0.281t-0.305-0.703v-1.172q-1.313-0.375-2.156-1.406t-0.844-2.438h3v-1.125q-1.313-0.375-2.156-1.43t-0.844-2.461h3v-1.125q-1.313-0.375-2.156-1.406t-0.844-2.438h3v-1.031q0-0.422 0.305-0.703t0.727-0.281h7.969q0.422 0 0.727 0.281t0.305 0.703v1.031h3q0 1.406-0.844 2.438t-2.156 1.406v1.125h3z" />
        </svg>
        Activity instance
      </Expandable.Header>
      <Expandable.Content className="content">
        <svg className="icon" viewBox="0 0 24 24" width="16" height="16">
          <path d="M1.031 17.016h15v1.969h-15v-1.969zM16.031 15h-15.047q0-2.297 1.547-3.844t3.75-1.922 4.43 0 3.773 1.922 1.547 3.844zM0.984 21.984v-0.984h15.047v0.984q0 0.422-0.305 0.703t-0.727 0.281h-12.984q-0.422 0-0.727-0.281t-0.305-0.703zM18.047 22.969v-8.016q0-2.953-2.438-5.297-1.453-1.453-4.266-2.25l-0.281-2.344h4.969v-4.078h1.969v4.078h5.016l-1.688 16.453q-0.094 0.609-0.539 1.031t-1.055 0.422h-1.688z" />
        </svg>
        Unnamed Activity
        <Expandable className="operate-expandable" isExpanded={false}>
          <Expandable.Header className="header">
            <Expandable.Toggle aria-label="Toggle" className="toggle">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path d="M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z" />
              </svg>
            </Expandable.Toggle>
            <svg className="icon" viewBox="0 0 24 24" width="16" height="16">
              <path d="M3.984 18h16.031v-12h-16.031v12zM2.016 3.984h19.969v16.031h-19.969v-16.031zM17.016 14.016v-4.031h-1.031v4.031h1.031zM18 8.016q0.422 0 0.703 0.281t0.281 0.703v6q0 0.422-0.281 0.703t-0.703 0.281h-3q-0.422 0-0.703-0.281t-0.281-0.703v-6q0-0.422 0.281-0.703t0.703-0.281h3zM11.016 14.016v-4.031h-1.031v4.031h1.031zM12 8.016q0.422 0 0.703 0.281t0.281 0.703v6q0 0.422-0.281 0.703t-0.703 0.281h-3q-0.422 0-0.703-0.281t-0.281-0.703v-6q0-0.422 0.281-0.703t0.703-0.281h3zM5.016 8.016h1.969v7.969h-1.969v-7.969z" />
            </svg>
            Activity instance #2
          </Expandable.Header>
          <Expandable.Content className="content">
            Unnamed Activity #2
          </Expandable.Content>
        </Expandable>
      </Expandable.Content>
    </Expandable>
  );
}
