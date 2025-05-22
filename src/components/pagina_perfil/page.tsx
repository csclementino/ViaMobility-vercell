'use client'

import React, { useState } from 'react';
import { ProfileFieldType } from '@/data/types';
import Link from 'next/link';

interface ProfileFieldProps {
  label: string;
  type: ProfileFieldType;
  editable?: boolean;
  value: string;
  actionLabel?: string;
  actionPath?: string;
  isVerified?: boolean;
  onUpdate?: (value: string) => void;
  onAction?: () => void;
}

const ProfileField: React.FC<ProfileFieldProps> = ({
  editable = true,
  label,
  type,
  value,
  actionLabel,
  actionPath,
  isVerified = false,
  onUpdate,
  onAction
}) => {
  const [fieldValue, setFieldValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setFieldValue(newValue);
    if (onUpdate) onUpdate(newValue);
  };

  return (
    <div className="flex justify-between items-center p-4">
      <label className="w-32 text-gray-400 font-medium">{label}</label>

      <div className="flex-grow flex justify-between items-center gap-2">
        {type === 'text' && editable ? (
          <input
            type="text"
            value={fieldValue}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <span className="text-white">{fieldValue}</span>
        )}

        {actionLabel && actionPath && (
          <Link
            href={actionPath}
            className={`border ${
              isVerified 
                ? 'border-green-500 text-green-500' 
                : 'border-gray-500 text-gray-500'
            } px-4 py-1 rounded-full hover:opacity-80 transition-opacity`}
          >
            {actionLabel}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProfileField;