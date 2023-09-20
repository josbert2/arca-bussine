'use client'
import React, { useEffect, useState } from 'react'
import supabase from '@/utils/supabase'
import { Button } from '@/components/ui/button'
import { Toaster, toast } from 'sonner'
/*
CREATE SCHEMA IF NOT EXISTS "auth";
CREATE SCHEMA IF NOT EXISTS "extensions";
create extension if not exists "uuid-ossp"      with schema extensions;
create extension if not exists pgcrypto         with schema extensions;
create extension if not exists pgjwt            with schema extensions;

grant usage on schema public to postgres, anon, authenticated, service_role;
grant usage on schema extensions to postgres, anon, authenticated, service_role;
alter user supabase_admin SET search_path TO public, extensions; -- don't include the "auth" schema

grant all privileges on all tables in schema public to postgres, anon, authenticated, service_role, supabase_admin;
grant all privileges on all functions in schema public to postgres, anon, authenticated, service_role, supabase_admin;
grant all privileges on all sequences in schema public to postgres, anon, authenticated, service_role, supabase_admin;

alter default privileges in schema public grant all on tables to postgres, anon, authenticated, service_role;
alter default privileges in schema public grant all on functions to postgres, anon, authenticated, service_role;
alter default privileges in schema public grant all on sequences to postgres, anon, authenticated, service_role;

alter default privileges for user supabase_admin in schema public grant all on sequences to postgres, anon, authenticated, service_role;
alter default privileges for user supabase_admin in schema public grant all on tables to postgres, anon, authenticated, service_role;
alter default privileges for user supabase_admin in schema public grant all on functions to postgres, anon, authenticated, service_role;

alter role anon set statement_timeout = '3s';
alter role authenticated set statement_timeout = '8s';

Este codigo arregla los permisos de supabase
*/



export default function page() {

    const [data, setData] = useState([])
  
    useEffect(() => {
      const getData = async () => {
        const { data, error } = await supabase.from('users').select()
        console.log({ data, error })
        setData(data)
      }
      getData()
    }, [])

    return (
      <div>
        <Button onClick={() => toast('My first toast')}> Holaasd </Button>
      </div>
    )
}
