import { NextRequest, NextResponse } from 'next/server';
import { advocateData } from "../../../db/seed/advocates";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const searchTerm = searchParams.get('searchTerm')?.toLowerCase() || '';
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  const filteredAdvocates = advocateData.filter(advocate =>
    advocate.firstName.toLowerCase().includes(searchTerm) ||
    advocate.lastName.toLowerCase().includes(searchTerm) ||
    advocate.city.toLowerCase().includes(searchTerm) ||
    advocate.degree.toLowerCase().includes(searchTerm) ||
    advocate.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm))
  );

  const paginatedAdvocates = filteredAdvocates.slice((page - 1) * limit, page * limit);

  return NextResponse.json({ data: paginatedAdvocates });
}