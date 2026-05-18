'use client'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

/* ------------------------------------------------------------------ */
/* 📌 Action Buttons (Save + Done)                                     */
/* ------------------------------------------------------------------ */
export function ActionButtons({
  isSaving,
  onSave,
  onDone,
}: {
  isSaving: boolean
  onSave: () => void
  onDone: () => Promise<void>
}) {
  return (
    <footer className="mt-4 flex w-full gap-3 px-4 flex-row">
      <button
        type="button"
        onClick={onSave}
        className="w-full flex-1 cursor-pointer rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg disabled:opacity-50"
        disabled={isSaving}
      >
        {isSaving ? 'Saving...' : 'Save Changes'}
      </button>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button
            type="button"
            className="w-full flex-1 cursor-pointer rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-green-700 hover:shadow-lg disabled:opacity-50"
            disabled={isSaving}
          >
            Done
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Mark as Finished?</AlertDialogTitle>
            <AlertDialogDescription>
              This will unassign the patient from the ASHA. Are you sure you want to continue?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-green-600 text-white hover:bg-green-700"
              onClick={onDone}
            >
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </footer>
  )
}
