import React from 'react';

export enum Status {
  Active = 'active',
  NotActive = 'not-active',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface ActiveLabelProps {
  children?: React.ReactNode;
  status: Status;
}

export default function StatusLabel({ children, status }: ActiveLabelProps) {
  return (
    <span
      className={`p-1 px-3.5 rounded-3xl text-sm font-medium ${(status === Status.Active && 'text-green-700 bg-green-100') || (status === Status.Active && 'text-green-700 bg-green-100')}`}
    >
      {children}
    </span>
  );
}
