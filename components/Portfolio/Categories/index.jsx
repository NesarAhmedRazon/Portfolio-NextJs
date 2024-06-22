import React from "react";

export default function Categories({ data }) {
  return (
    <div className="text-sm ">
      {data.terms.nodes.map((term, i) => {
        // skip if the term.slug is 'done' or 'in-progress'
        if (term.slug === "done" || term.slug === "in-progress") return null;
        let termName = term.name;
        termName =
          i === data.terms.nodes.length - 1 ? termName : termName + ", ";
        return (
          <span key={i} className="text-sm font-light">
            {termName}
          </span>
        );
      })}
    </div>
  );
}
