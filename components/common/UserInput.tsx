'use client'

import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useCallback, useState } from 'react'

interface UserInputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  /**
   * 별점 등록 여부 ex) 후기 등록 시 필요
   */
  star?: boolean
}

export default function UserInput({ star = false, ...rest }: UserInputProps) {
  const [text, setText] = useState('')
  const [isFocus, setIsFocus] = useState(false)

  const onChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }, [])

  return (
    <div className="mb-4">
      {star && <p>별점 등록 만들기</p>}

      <input
        value={text}
        className="w-full px-4 py-3 border-solid border-2 border-gray-2 rounded-lg placeholder:text-caption1 text-body2 mb-2"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(e) => onChangeInput(e)}
        {...rest}
      ></input>

      {(isFocus || text) && (
        <div className="flex justify-end gap-2">
          <button className="px-3 py-1.5 text-body2 text-primary" onClick={() => setText('')}>
            취소
          </button>
          <button className="px-3 py-1.5 text-body2 bg-primary text-white rounded-lg">등록</button>
        </div>
      )}
    </div>
  )
}
