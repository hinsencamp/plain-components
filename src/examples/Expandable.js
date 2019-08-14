import React from "react";
import Expandable from "../components/Expandable";
import "./expandable.scss";

export function OperateExpandable() {
  return (
    <Expandable className="operate-expandable" isExpanded={false}>
        <Expandable.Header className="header">
          <Expandable.Toggle aria-label="Toggle" className="toggle">
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path d="M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z"></path>
            </svg>
          </Expandable.Toggle>
          <svg className="icon" viewBox="0 0 24 24" width="16" height="16">
            <path d="M12 9q0.844 0 1.43-0.586t0.586-1.43-0.586-1.406-1.43-0.563-1.43 0.563-0.586 1.406 0.586 1.43 1.43 0.586zM12 14.016q0.797-0.047 1.383-0.633t0.586-1.383-0.586-1.383-1.383-0.633h-0.047q-0.844 0-1.43 0.586t-0.586 1.43 0.586 1.43 1.43 0.586h0.047zM12 18.984q0.797-0.047 1.383-0.609t0.586-1.359-0.586-1.383-1.383-0.633h-0.047q-0.844 0-1.43 0.586t-0.586 1.43 0.586 1.406 1.43 0.563h0.047zM20.016 9.984q0 1.406-0.844 2.461t-2.156 1.43v1.125h3q0 1.406-0.844 2.438t-2.156 1.406v1.172q0 0.422-0.305 0.703t-0.727 0.281h-7.969q-0.422 0-0.727-0.281t-0.305-0.703v-1.172q-1.313-0.375-2.156-1.406t-0.844-2.438h3v-1.125q-1.313-0.375-2.156-1.43t-0.844-2.461h3v-1.125q-1.313-0.375-2.156-1.406t-0.844-2.438h3v-1.031q0-0.422 0.305-0.703t0.727-0.281h7.969q0.422 0 0.727 0.281t0.305 0.703v1.031h3q0 1.406-0.844 2.438t-2.156 1.406v1.125h3z"></path>
          </svg>

          Activity instance
        </Expandable.Header>
        <Expandable.Content className="content">
          <svg className="icon" viewBox="0 0 24 24" width="16" height="16">
            <path d="M1.031 17.016h15v1.969h-15v-1.969zM16.031 15h-15.047q0-2.297 1.547-3.844t3.75-1.922 4.43 0 3.773 1.922 1.547 3.844zM0.984 21.984v-0.984h15.047v0.984q0 0.422-0.305 0.703t-0.727 0.281h-12.984q-0.422 0-0.727-0.281t-0.305-0.703zM18.047 22.969v-8.016q0-2.953-2.438-5.297-1.453-1.453-4.266-2.25l-0.281-2.344h4.969v-4.078h1.969v4.078h5.016l-1.688 16.453q-0.094 0.609-0.539 1.031t-1.055 0.422h-1.688z"></path>
          </svg>
          
          Unnamed Activity
    
          <Expandable className="operate-expandable" isExpanded={false}>
            <Expandable.Header className="header">
              <Expandable.Toggle aria-label="Toggle" className="toggle">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path d="M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z"></path>
                </svg>
              </Expandable.Toggle>
              <svg className="icon" viewBox="0 0 24 24" width="16" height="16">
                <path d="M3.984 18h16.031v-12h-16.031v12zM2.016 3.984h19.969v16.031h-19.969v-16.031zM17.016 14.016v-4.031h-1.031v4.031h1.031zM18 8.016q0.422 0 0.703 0.281t0.281 0.703v6q0 0.422-0.281 0.703t-0.703 0.281h-3q-0.422 0-0.703-0.281t-0.281-0.703v-6q0-0.422 0.281-0.703t0.703-0.281h3zM11.016 14.016v-4.031h-1.031v4.031h1.031zM12 8.016q0.422 0 0.703 0.281t0.281 0.703v6q0 0.422-0.281 0.703t-0.703 0.281h-3q-0.422 0-0.703-0.281t-0.281-0.703v-6q0-0.422 0.281-0.703t0.703-0.281h3zM5.016 8.016h1.969v7.969h-1.969v-7.969z"></path>
              </svg>

              Activity instance #2
            </Expandable.Header>
            <Expandable.Content className="content">
              Unnamed Activity #2
            </Expandable.Content>
          </Expandable>
        </Expandable.Content>
      </Expandable>
  )
}